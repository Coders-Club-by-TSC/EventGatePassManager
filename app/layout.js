// import Navbar from "@/components/Navbar";
import "./globals.css";
import { Preahvihear } from "next/font/google";
import { NextAuthProvider } from "./Providers";

const preahvihear = Preahvihear({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "EventEase",
  description: "Get things done with ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={preahvihear.className}>
        <NextAuthProvider>
          {/* <Navbar /> */}
          <div className="mt-32">{children}</div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
