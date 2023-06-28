export async function POST(request) {
	const { name, message, email } = await request.json()

	const sgMail = require('@sendgrid/mail')
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const msg = {
		to: 'thegemlins@gmail.com', // Destination email address
		from: 'hookerhillstudios@gmail.com', // Sender email address
		subject: `${name} has a custom jewelry request`,
		text: `${email}\n\nName: ${name}\n\nMessage: ${message}`,
	}

	try {
		await sgMail.send(msg)
		return new Response('Success', {
			status: 200,
		})
	} catch (error) {
		console.error(error)

		if (error.response) {
			console.error(error.response.body)
		}

		return new Response('Failed to send email', {
			status: 500,
		})
	}
}
