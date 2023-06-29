"use client"
import React from "react"
import Link from "next/link"
import useCart from "./(store)/store"
import Modal from "./Modal"

export default function Header() {
  const cartItems = useCart(state => state.cart)
  console.log(cartItems)
  const openModal = useCart(state => state.openModal)
  const setOpenModal = useCart(state => state.setOpenModal)
  return (
    <header className='sticky top-0 p-4 bg-white border-b border-solid border-slate-900 text-white shadow-md z-50 text-2xl sm:text-3xl md:text-4xl flex item-center justify-between'>
      {openModal && (
        <Modal />
      )}
      <Link passHref href={'/'}>
        <h1 className='uppercase cursor-pointer hover:underline hover:text-sky-950 duration-300 text-slate-900'><i className="fa-solid fa-gem mr-2"></i>Jewelry & Gems</h1>
      </Link>
      <div onClick={setOpenModal} className="relative cursor-pointer group grid place-items-center">
        {cartItems.length > 0 && (
          <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 bg-blue-400 text-white grid place-items-center top-0  rounded-full right-0 -translate-y-1/2 translate-x-1/2  hover:scale-95 duration-300">
            <p className="text-xs sm:text-sm ">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid cursor-pointer text-slate-900 hover:text-sky-950 fa-shopping-cart "></i>
      </div>
    </header>
  )
}

