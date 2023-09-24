import { connectToDB } from "@/lib/mongodb";
import Admin from "@/models/admin";
import Event from "@/models/event";
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
    console.log(event);
    if (!event) {
      return NextResponse.json(
        { message: "You are not authorised to access " + name },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: event }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}
export async function DELETE(req, { params }) {
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
      creator,
      name,
    });
    if (!event) {
      return NextResponse.json(
        { message: "You are not authorised to delete " + name },
        { status: 404 }
      );
    }
    await event.deleteOne();
    return NextResponse.json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
//check if no changes were made then no edit (frontend)
export async function PUT(req, { params }) {
  const { name } = params;
  const { email } = await getToken({ req });
  const { collaborators } = await req.json();
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
    });
    if (!event) {
      return NextResponse.json(
        { message: "You are not authorised to edit " + name },
        { status: 404 }
      );
    }
    const editedEvent = await Event.findByIdAndUpdate(
      event._id,
      {
        collaborators,
      },
      { new: true }
    );
    return NextResponse.json({
      success: true,
      message: "Collaborators modified successfully",
      data: editedEvent,
    });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
