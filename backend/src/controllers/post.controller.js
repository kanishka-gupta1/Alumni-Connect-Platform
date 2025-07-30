import { asyncHandler } from '../utils/asyncHandler.js';
import { Question } from '../models/question.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Controller to post a question
const postQuestion = asyncHandler(async (req, res) => {

    const { content, tags } = req.body;
    const userId = req.user._id; // Assuming user ID is available in req.user

    // Validate required fields
    if (!content) {
        throw new ApiError(400, 'Content is required.');
    }

    // Create a new post
    const question = await Question.create({
        content,
        tags: tags || [], // Default to an empty array if tags are not provided
        createdBy: userId,
    });

    return res.status(201).json(
        new ApiResponse(201, question, 'Question posted successfully.'),
    )

});

const getAllQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({}).populate('createdBy', 'fullName avatarImage rollNumber');
    return res.status(200).json(
        new ApiResponse(200, questions, 'Questions fetched successfully.'),
    );
}

);

const getMyQuestions = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Assuming user ID is available in req.user

    const questions = await Question.find({ createdBy: userId }).populate('createdBy', 'fullName avatarImage rollNumber');
    return res.status(200).json(
        new ApiResponse(200, questions, 'My Questions fetched successfully.'),
    );
})

export { postQuestion, getAllQuestions, getMyQuestions };