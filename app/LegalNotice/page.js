import React from 'react'

function LegalNotice() {
	return (
		<>
			<div className="bg-gray-100 text-slate-900">
				<div className="container mx-auto py-8">
					<h1 className="text-xl ml-2 sm:text-2xl font-bold mb-8">Secure Payment Processing Legal Notice</h1>

					<div className="bg-white p-6 m-2 shadow-neutral-950 shadow-lg">
						<h2 className="text-xl font-bold mb-4">Security Measures</h2>
						<p className="mb-4">
							Stripe employs robust security measures to protect your sensitive information and payment details. These measures include advanced encryption, tokenization, and compliance with industry-standard security protocols.
						</p>

						<h2 className="text-xl font-bold mb-4">User Consent</h2>
						<p className="mb-4">
							By using &apos;Jewelry & Gems&apos; and initiating payments through the app, you provide your consent for Stripe to process your payment information securely and in accordance with applicable laws and regulations.
						</p>

						<h2 className="text-xl font-bold mb-4">Data Collection and Use</h2>
						<p className="mb-4">
							Stripe may collect and process certain personal and payment information as necessary to provide payment processing services. For detailed information on how Stripe handles your data, please review their <a href="https://stripe.com/legal/privacy-center#what-is-stripe-js" className="text-blue-500">privacy policy</a>.
						</p>

						<h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
						<p className="mb-4">
							It is essential to review Stripe&lsquo;s privacy policy, as it governs the collection, storage, and usage of your personal data. For more information, please refer to the <a href="https://stripe.com/legal/privacy-center#what-is-stripe-js" className="text-blue-500">Stripe Privacy Policy</a>.
						</p>

						<h2 className="text-xl font-bold mb-4">Third-Party Disclosure</h2>
						<p className="mb-4">
							Stripe may share necessary user information with third parties solely for the purpose of providing payment processing services and complying with legal obligations.
						</p>

						<h2 className="text-xl font-bold mb-4">User Rights</h2>
						<p className="mb-4">
							As a user, you may have rights regarding the processing of your personal information. These rights may include access, rectification, erasure, and restriction of data processing, as provided by applicable data protection laws.
						</p>

						<h2 className="text-xl font-bold mb-4">Contact Information</h2>
						<p className="mb-4">
							If you have any questions or concerns about our payment processing or this legal notice, please contact us at <a href="mailto: thegemlins@gmail.com@gmail.com" className="text-blue-500">thegemlins@gmail.com@gmail.com</a>.
						</p>

						<h2 className="text-xl font-bold mb-4">Effective Date and Updates</h2>
						<p className="mb-4">
							This legal notice is effective as of June 26, 2023. We may update or modify this notice from time to time, and any significant changes will be communicated to you through the app or via email.
						</p>

						<p>
							Thank you for using &apos;Jewelry & Gems&apos; and entrusting your payments to Stripe for secure processing.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default LegalNotice