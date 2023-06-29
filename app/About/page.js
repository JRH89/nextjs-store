"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
import Message from '../Message/Message'


const AboutPage = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const galleryImages = [
		'/images/gallery/image1.jpg',
		'/images/gallery/image2.jpg',
		'/images/gallery/image3.jpg',
		'/images/gallery/image4.jpg',
		'/images/gallery/image5.jpg',
		'/images/gallery/image6.jpg',
		'/images/gallery/image7.jpg',
		'/images/gallery/image8.jpg',
		'/images/gallery/image9.jpg',
		'/images/gallery/image10.jpg',
	]

	const handlePrevious = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
		)
	}

	return (

		<div className="text-slate-900 flex flex-col mx-auto container max-w-[900px] py-8 select-none">
			<ToastContainer />
			<h1 className="text-2xl sm:text-3xl pl-4 sm:ml-0 font-bold mb-8 text-center">
				About the Artist
			</h1>
			<div className="bg-white p-6 shadow-lg shadow-neutral-950 mx-2 mb-8">
				<div className="flex items-center justify-center">
					<Image
						height={200}
						width={200}
						src="/profile_pic.png"
						alt="Jared Hooker" className="rounded-full mb-4 w-40 h-40 object-cover"
					/>
				</div>
				<h2 className="text-xl font-bold mb-4 text-center">Jared Hooker</h2>
				<p className="mb-4">
					With a passion for craftsmanship, Jared specializes in creating unique pendants and rings using silver and 14kgf wire. Since 2012, he has been honing his skills and bringing beautiful wirewrapped jewelry to life.
				</p>
				<p className="mb-4">
					At &quot;Jewelry & Gems,&quot; Jared is committed to using ethically sourced natural stones, ensuring that each piece is not only visually appealing but also environmentally conscious.
				</p>
			</div>
			<div className="bg-white p-6 shadow-lg shadow-neutral-950 mb-8 flex flex-col justify-center mx-2">
				<h2 className="text-center text-xl font-bold mb-8">Jewelry Gallery</h2>
				<div className="relative flex justify-center mb-8">
					<button
						onClick={handlePrevious}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-12 w-12 flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<div className="w-72 h-72 items-center align-middle justify-center  flex">
						<Image
							height={400}
							width={200}
							src={galleryImages[currentImageIndex]}
							alt="Gallery"
							className=""
						/>
					</div>
					<button
						onClick={handleNext}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-12 w-12 flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="bg-white p-6 mx-2 shadow-lg shadow-neutral-950">
				<h2 className="text-xl font-bold mb-4 text-center">Custom Jewelry Requests</h2>
				<p className="mb-4">
					If you have a specific design in mind or would like a personalized piece, please feel free to reach out via the form below:
				</p>
				<Message />
			</div>
		</div>


	)
}

export default AboutPage
