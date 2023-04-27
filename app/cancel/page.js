import Link from "next/link"

export default function CancelPage() {
    return (
        <div className="flex flex-col text-center pt-10 justify-center items-center">
            Try Again!!!<br />
            <Link className="flex-1 mt-5 w-1/3 p-2 text-white hover:text-slate-700 bg-black rounded shadow-xl border border-solid hover:opacity-60 hover:scale-110" href="/">Back Home</Link>
        </div> 
    )
}