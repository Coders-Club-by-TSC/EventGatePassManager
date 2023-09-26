"use client"
import { useSession, signIn, signOut } from "next-auth/react"

function SignInButton() {
    const { status } = useSession();
    const signInHandler = () => {
        signIn("google", { callbackUrl: "/" })
    }
    const signOutHandler = () => {
        signOut({ callbackUrl: "/" })
    }
    return (
        <>
            {
                status === "authenticated" ? (
                    <button type="button" onClick={signOutHandler} className="text-black bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        Sign Out
                    </button>
                ) : (
                    <button type="button" onClick={signInHandler} className="text-black bg-white hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
                        Sign In
                    </button>
                )
            }
        </>
    )
}

export default SignInButton