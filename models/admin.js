import { Schema, model, models } from "mongoose";

const adminSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
  },
});

const Admin = (models && models.Admin) || model("Admin", adminSchema);
export default Admin;
