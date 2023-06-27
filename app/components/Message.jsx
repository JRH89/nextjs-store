import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Message() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [showMessage, setShowMessage] = useState(false)

	async function handleSubmit(event) {
		event.preventDefault()

		const sanitizedName = DOMPurify.sanitize(name)
		const sanitizedEmail = DOMPurify.sanitize(email)
		const sanitizedMessage = DOMPurify.sanitize(message)
		console.log(sanitizedName)
		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: sanitizedName,
					message: sanitizedMessage,
					email: sanitizedEmail,
				}),
			})


			if (response.ok) {
				setShowMessage(true)
				toast.success('Email sent successfully!', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000,
				})
			} else {
				toast.error('Failed to send email. Please try again later.', {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 3000,
				})
			}
		} catch (error) {
			console.error(error)
		}
		setName("")
		setEmail("")
		setMessage("")
		setTimeout(() => {
			setShowMessage(false)
		}, 5000)
	}

	return (
		<>
			<ToastContainer />
			<>
				{showMessage ? (
					<div className="p-10 mt-4 bg-neutral-300 mb-4 rounded-xl flex flex-col border-stone-800 border border-solid justify-center  ml-10 mr-10 mx-auto my-auto text-stone-800 text-center">
						Thank you for reaching out,
						<br /> I will review your message and <br />
						be in touch as soon as possible.
						<br />
						<br />
						<p className="text-stone-800">-Jared</p>
					</div>
				) : (
					<form className="mb-4" onSubmit={handleSubmit}>

						<div className="flex flex-col mb-4">
							<label htmlFor="name" className="text-lg font-bold mb-2">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="border border-gray-300 p-2"
								placeholder="Your Name"
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="email" className="text-lg font-bold mb-2">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="border border-gray-300 p-2"
								placeholder="Your Email"
							/>
						</div>
						<div className="flex flex-col mb-4">
							<label htmlFor="message" className="text-lg font-bold mb-2">Message</label>
							<textarea
								name="message"
								id="message"
								rows="4"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="border border-gray-300 p-2"
								placeholder="Your Message"
							></textarea>
						</div>
						<button type="submit" className="bg-slate-900 hover:bg-sky-900 text-white py-2 px-4 ">Submit</button>

					</form>
				)}
			</>
		</>
	)
}
