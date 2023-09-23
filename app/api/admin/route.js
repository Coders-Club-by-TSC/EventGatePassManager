import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectToDB();
  try {
    await User.create({ name, email });
    return NextResponse.json({ message: "User Signed In" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
