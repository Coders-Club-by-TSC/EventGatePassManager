import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, picture } = await request.json();
  await connectToDB();
  try {
    await Admin.create({ name, email, picture });
    return NextResponse.json({ message: "Admin Signed In" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
