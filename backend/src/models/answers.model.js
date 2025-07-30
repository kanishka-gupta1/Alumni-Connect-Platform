import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema(
    {
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        content: {
            type: String,
            required: true,
            trim: true,
        },
        votes: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Answer = mongoose.model('Answer', answerSchema);
