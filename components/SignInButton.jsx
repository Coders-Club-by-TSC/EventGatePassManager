"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { BlackButton } from "./Buttons";

const SignInbutton = () => {
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
                    <BlackButton onClick={signOutHandler} text="Sign Out" />
                ) : (
                    <BlackButton onClick={signInHandler} text="Sign In" />
                )
            }
        </>
    )
}

export default SignInbutton