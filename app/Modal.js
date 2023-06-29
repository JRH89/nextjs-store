import React from "react"
import ReactDom from "react-dom"
import useCart from "./(store)/store"
import { useRouter } from "next/navigation"

export default function Modal() {
  const closeModal = useCart((state) => state.setOpenModal)
  const cartItems = useCart((state) => state.cart)
  const removeItemFromCart = useCart((state) => state.removeItemFromCart)
  const router = useRouter()

  async function checkout() {
    const lineItems = cartItems.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: 1,
      }
    })

    const res = await fetch("api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lineItems }),
    })

    const data = await res.json()

    // Redirect to the Stripe checkout page
    router.push(data.session.url)

    // After the checkout is completed, set the items as inactive
    if (data.session && data.session.payment_status === "paid") {
      await Promise.all(
        cartItems.map(async (cartItem) => {
          const itemId = cartItem.price_id
          await setItemInactive(itemId)
        })
      )
    }
  }

  // Function to set item as inactive in Stripe
  async function setItemInactive(itemId) {
    try {
      // Retrieve the product or price object from Stripe
      const item = await stripe.products.retrieve(itemId) // or stripe.prices.retrieve(itemId)

      // Set the 'active' attribute to false
      item.active = false

      // Update the product or price object in Stripe
      await stripe.products.update(itemId, { active: false }) // or stripe.prices.update(itemId, { active: false })

      console.log("Item set as inactive:", item)
    } catch (error) {
      console.error("Error setting item as inactive:", error)
    }
  }

  function handleRemoveItem(itemId) {
    removeItemFromCart({ itemIndex: itemId })
  }

  // Calculate the subtotal
  const subtotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.cost
  }, 0)

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex text-slate-900 items-center justify-between text-xl relative p-6">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="text-slate-900 fa-solid cursor-pointer hover:text-sky-950 fa-xmark duration-100 hover:rotate-90"
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 text-slate-900 overflow-y-scroll flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>There is nothing in your cart...</p>
          ) : (
            <>
              {cartItems.map((cartItem, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-l border-solid border-700 px-2 flex-col gap-2"
                  >
                    <div className="flex flex-row justify-between">
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-500 hover:text-red-700 pr-3  "
                      >
                        <i className="fa fa-xmark hover:rotate-90 duration-100"></i>
                      </button>
                      <div className="flex flex-row items-center w-full  justify-between">
                        <h2>{cartItem.name}</h2>
                        <p>${cartItem.cost / 100}</p>
                      </div>

                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div>
        {cartItems.length >= 1 &&
          <div className="border-t border-slate-900 border-solid text-slate-900 text-xl m-4 p-4 mr-5 uppercase grid place-items-center justify-center   ">
            Subtotal: ${subtotal / 100}
          </div>
        }
        <div
          onClick={checkout}
          className="border border-slate-900 border-solid text-slate-900 text-xl m-4 p-4 mr-5 uppercase grid place-items-center justify-center  hover:opacity-60 cursor-pointer"
        >
          Checkout
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}
