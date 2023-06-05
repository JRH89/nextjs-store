import { NextResponse } from "next/server";
import Stripe from "stripe"

export async function POST(request) {

    const body = await request.json()

    if (body.lineItems.length === 0) {

        return new Response('Error', {
            status: 405,
        });
    }

    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
            apiVersion: '2020-08-27'
        })

        const session = await stripe.checkout.sessions.create({
            success_url: 'http://next-jewelry.vercel.app/success',
            cancel_url: 'https://next-jewelry.vercel.app/cancel',
            line_items: body.lineItems,
            mode: 'payment'
        })
        return NextResponse.json({ session })
    } catch (err) {
        console.log('BROKEN')
        console.log(err)
        return new Response('Error', {
            status: 405,
        });
    }
}