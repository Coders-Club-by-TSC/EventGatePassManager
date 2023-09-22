import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  uid: {
    type: String,
    required: [true, "uid is required"],
    unique: [true, "Email already exists"],
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: [true, "Event is required"],
  },
});

const User = (models && models.User) || model("User", userSchema);
export default User;
