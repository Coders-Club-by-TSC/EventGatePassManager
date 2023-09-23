"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { DarkButton } from "./Buttons";

const SignInbutton = () => {
    const { status } = useSession();
    const signOutButton = () => signOut({ callbackUrl: "/" })
    return (
        <>
            {
                status === "authenticated" ? (
                    <DarkButton onClick={signOutButton} title={"Sign Out"} />
                ) : (
                    <button type="button" onClick={() => signIn("google", { callbackUrl: "/todos" })} className="text-[#301e5a] bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                            <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                        </svg>
                        Sign In
                    </button>
                )
            }
        </>
    )
}

export default SignInbutton