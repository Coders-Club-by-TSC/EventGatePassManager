import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import Event from "@/models/event";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await getToken({ req });
  const { name, collaborators } = await req.json();
  try {
    await connectToDB();
    const creator = await Admin.findOne({ email });
    if (!creator) {
      return NextResponse.json(
        { message: "Not a valid Creator" },
        { status: 400 }
      );
    }
    const eventDetails = await Event.create({
      creator,
      name,
      collaborators,
    });
    return NextResponse.json(
      { success: true, message: "Event Created", data: eventDetails },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

export async function GET(req) {
  const { email } = await getToken({ req });
  try {
    await connectToDB();
    const creator = await Admin.findOne({ email });
    if (!creator) {
      return NextResponse.json(
        { message: "Not a valid creator" },
        { status: 400 }
      );
    }
    const events = await Event.find({
      $or: [{ creator }, { collaborators: { $elemMatch: { $eq: email } } }],
    }).populate("creator");

    return NextResponse.json({ data: events }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
