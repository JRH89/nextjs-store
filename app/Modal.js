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
    router.push(data.session.url)
  }

  function handleRemoveItem(itemId) {
    removeItemFromCart({ itemIndex: itemId })
  }

  return ReactDom.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div onClick={closeModal} className="bg-transparent absolute inset-0"></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex text-slate-900 items-center justify-between text-xl relative p-6">
          <h1>Cart</h1>
          <i
            onClick={closeModal}
            className="text-slate-900 fa-solid cursor-pointer hover:opacity-60 fa-xmark duration-300 hover:rotate-90"
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
                    <div className="flex items-center justify-between">
                      <h2>{cartItem.name}</h2>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-900 text-sm">Quantity: 1</p>
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                )
              })}
            </>
          )}
        </div>
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
