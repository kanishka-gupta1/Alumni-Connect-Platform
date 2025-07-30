import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LogOut from "../componenets/logout";

const AlumniQuestions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  const getAllQuestions = async () => {
    try {
      const response = await axios.get("/api/user/all-questions");
      console.log(response.data);
      if (response.status === 200) {
        setQuestions(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  return (
    <div className="flex bg-[#0f0f1c] min-h-screen text-white">
      {/* Left Sidebar Navigation */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64 h-screen">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        {/* <button className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition">
          Feed
        </button> */}
        <button
          onClick={() => navigate("/alumni/profile")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Profile
        </button>
        <button
          onClick={() => navigate("/alumni/questions")}
          className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition"
        >
          Questions
        </button>
        <button
          onClick={() => navigate("/alumni/post")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Post
        </button>
        <button
          onClick={() => navigate("/alumni/request")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Connection Request
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="mb-8 font-bold text-violet-400 text-3xl">
          Student Questions
        </h1>
        <div className="space-y-6">
          {questions.length > 0 ? (
            <div className="mt-10">
              <h4 className="mb-2 font-semibold text-gray-300 text-lg">
                Questions asked by students
              </h4>
              <ul className="flex flex-col justify-start space-y-4">
                {questions.map((q, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-4 bg-[#1a1a2e] p-4 border border-gray-600 rounded-md"
                  >
                    <img
                      src={
                        q.createdBy?.avatarImage
                          ? q.createdBy.avatarImage
                          : `https://api.dicebear.com/9.x/big-smile/svg?seed=${q.createdBy?.rollNumber}&backgroundColor=c0aede`
                      }
                      alt=""
                      className="rounded-full w-12 h-12"
                    />
                    <div className="flex-1">
                      <div className="text-gray-400 text-sm">
                        {q.createdBy?.fullName} •
                      </div>
                      <p className="mt-2 text-white">{q.content}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded text-sm transition">
                          Answer
                        </button>
                        <span className="text-gray-400">
                          {q.answers} answers
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-gray-400">
              No questions available at the moment.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default AlumniQuestions;
