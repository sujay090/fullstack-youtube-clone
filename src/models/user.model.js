import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userShema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowecase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      lowecase: true,
      unique: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, /// cloudnary url
      required: true,
    },
    coverimg: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "password is required "],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);
userShema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userShema.methods.generatAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userShema.methods.generatRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
export const User = mongoose.model("User", userShema);
