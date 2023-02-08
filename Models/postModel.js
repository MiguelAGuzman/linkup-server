import mongoose from "mongoose";

const postSchema = mongoose.Model({
    userID: { type: String },
})