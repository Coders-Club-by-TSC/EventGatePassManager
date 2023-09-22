import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  admin: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
    required: [true, "Admin is required"],
  },
  name: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
});

const Event = (models && models.Event) || model("Event", eventSchema);
export default Event;
