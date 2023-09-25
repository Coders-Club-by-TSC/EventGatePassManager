import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import Event from "@/models/event";
import User from "@/models/user";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { name } = params;
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
    const event = await Event.findOne({
      $and: [
        {
          $or: [{ creator }, { collaborators: { $elemMatch: { $eq: email } } }],
        },
        {
          name,
        },
      ],
    }).populate("creator");
    if (!event) {
      return NextResponse.json(
        { message: "You are not authorised to access " + name },
        { status: 404 }
      );
    }
    const users = await User.find({ event });
    console.log(users);
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
export async function POST(req, { params }) {
  const { name } = params;
  const { email } = await getToken({ req });
  const { uid } = await req.json();
  try {
    await connectToDB();
    const creator = await Admin.findOne({ email });
    if (!creator) {
      return NextResponse.json(
        { success: false, message: "Not a valid creator" },
        { status: 400 }
      );
    }
    const event = await Event.findOne({
      $and: [
        {
          $or: [{ creator }, { collaborators: { $elemMatch: { $eq: email } } }],
        },
        {
          name,
        },
      ],
    });
    if (!event) {
      return NextResponse.json(
        {
          message: "You are not authorised to work in " + name,
        },
        { status: 404 }
      );
    }
    console.log(uid);
    const user = await User.findOne({ uid, event });
    console.log(user);
    if (!user) {
      await User.create({
        uid,
        event,
      });
      return NextResponse.json(
        { success: true, message: "User Added" },
        { status: 201 }
      );
    }
    return NextResponse.json(
      { success: false, message: "User Already Exists" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ success: false, message: err }, { status: 500 });
  }
}
