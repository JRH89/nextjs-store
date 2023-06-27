import React from 'react'
import Head from 'next/head'

function LegalNotice() {
	return (
		<>
			<div class="bg-gray-100">
				<div class="container mx-auto py-8">
					<h1 class="text-3xl font-bold mb-8">Secure Payment Processing Legal Notice</h1>

					<div class="bg-white p-6 rounded-lg shadow-lg">
						<h2 class="text-xl font-bold mb-4">Security Measures</h2>
						<p class="mb-4">
							Stripe employs robust security measures to protect your sensitive information and payment details. These measures include advanced encryption, tokenization, and compliance with industry-standard security protocols.
						</p>

						<h2 class="text-xl font-bold mb-4">User Consent</h2>
						<p class="mb-4">
							By using &apos;Jewelry & Gems&apos; and initiating payments through the app, you provide your consent for Stripe to process your payment information securely and in accordance with applicable laws and regulations.
						</p>

						<h2 class="text-xl font-bold mb-4">Data Collection and Use</h2>
						<p class="mb-4">
							Stripe may collect and process certain personal and payment information as necessary to provide payment processing services. For detailed information on how Stripe handles your data, please review their <a href="https://stripe.com/legal/privacy-center#what-is-stripe-js" class="text-blue-500">privacy policy</a>.
						</p>

						<h2 class="text-xl font-bold mb-4">Privacy Policy</h2>
						<p class="mb-4">
							It is essential to review Stripe&lsquo;s privacy policy, as it governs the collection, storage, and usage of your personal data. For more information, please refer to the <a href="https://stripe.com/legal/privacy-center#what-is-stripe-js" class="text-blue-500">Stripe Privacy Policy</a>.
						</p>

						<h2 class="text-xl font-bold mb-4">Third-Party Disclosure</h2>
						<p class="mb-4">
							Stripe may share necessary user information with third parties solely for the purpose of providing payment processing services and complying with legal obligations.
						</p>

						<h2 class="text-xl font-bold mb-4">User Rights</h2>
						<p class="mb-4">
							As a user, you may have rights regarding the processing of your personal information. These rights may include access, rectification, erasure, and restriction of data processing, as provided by applicable data protection laws.
						</p>

						<h2 class="text-xl font-bold mb-4">Contact Information</h2>
						<p class="mb-4">
							If you have any questions or concerns about our payment processing or this legal notice, please contact us at <a href="mailto:hooker-hill-studios@gmail.com" class="text-blue-500">hooker-hill-studios@gmail.com</a>.
						</p>

						<h2 class="text-xl font-bold mb-4">Effective Date and Updates</h2>
						<p class="mb-4">
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