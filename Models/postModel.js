import mongoose from "mongoose";

const postSchema = mongoose.Model({
    userID: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
},
{
    timestamps: true
});