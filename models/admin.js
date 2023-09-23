import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  picture: {
    type: String,
  },
});

const Admin = (models && models.Admin) || model("Admin", adminSchema);
export default Admin;
