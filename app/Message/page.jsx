"use client"
import React from 'react'
import Message from './Message'

function MessagePage() {
	return (
		<div className='m-5 text-slate-900 flex flex-col justify-evenly gap-5'>
			<div className='gap-5 flex flex-col justify-evenly'>
				<h1 className='text-3xl font-bold '>
					Contact
				</h1>
				<p>
					At Jewelry & Gems, we are committed to providing trustworthy and reliable service. We take pride in conducting business with integrity and ensuring your satisfaction. Whether you need assistance in selecting the perfect piece or have inquiries about our services, we are dedicated to delivering personalized attention and expertise. Your happiness and trust are our top priorities, and we strive to make your jewelry shopping experience seamless and enjoyable. Feel free to reach out - we are here to assist you and provide you with exceptional service.
				</p>
			</div>
			<Message />
		</div>
	)
}

export default MessagePage