import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Internship", "Tips", "Industry Insights"],
            default: "Tips",
            required: true,
        },
        alumni: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        votes: {
            type: Number,
            default: 0,
        },
        comments_no: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('Post', postSchema);
