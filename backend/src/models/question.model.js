import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    answers: {
        type:Number,
        default: 0,
    },
    

},
    {
        timestamps: true,
    }
);

export const Question = mongoose.model('Question', questionSchema);
