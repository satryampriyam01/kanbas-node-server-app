import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id:{ type: String, default: () => new mongoose.Types.ObjectId().toString() },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName:{ type: String, default: "First Name" },
    email: {type : String, dafault: "user@gmail.com"},
    lastName: {type : String, default: "Last Name"},
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: {type : String , default: ""},
    section: {type: String, default: "S101"},
    lastActivity: {type : Date, default : Date.now().toString()},
    totalActivity: {type: String , default : "10:00:00"},
  },
  { collection: "users" }
);
userSchema.pre('save', function (next) {
  if (!this.loginId) {
    this.loginId = this._id;
  }
  next();
});
export default userSchema;