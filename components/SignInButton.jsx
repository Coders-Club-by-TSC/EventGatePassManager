"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { WhiteButton } from "./Buttons";

const SignInButton = () => {
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
                    <WhiteButton onClick={signOutHandler} text="Sign Out" />
                ) : (
                    <WhiteButton onClick={signInHandler} text="Sign In" />
                )
            }
        </>
    )
}

export default SignInButton