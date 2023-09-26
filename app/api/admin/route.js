import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import { getToken } from "next-auth/jwt";
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
export async function GET(req) {
  const { email } = await getToken({ req });
  try {
    await connectToDB();
    const creator = await Admin.findOne({ email });
    return NextResponse.json({ data: creator }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
