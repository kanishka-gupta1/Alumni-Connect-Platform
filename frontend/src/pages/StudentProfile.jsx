import React, { useEffect, useState } from "react";
import LogOut from "../componenets/logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user/current-user");
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const getMyQuestions = async () => {
    try {
      const response = await axios.get("/api/user/my-questions");
      setQuestions(response.data.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    getUser();
    getMyQuestions();
  }, []);

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => navigate("/student")}
        >
          Feed
        </button>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
          Profile
        </button>
        <button
          onClick={() => navigate("/student/questions")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Questions
        </button>
        <button
          onClick={() => navigate("/student/connect")}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Connect
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {user ? (
          <div className="bg-[#1a1a2e] shadow-lg mx-auto p-6 rounded-xl max-w-4xl">
            {/* User Info */}
            <div className="flex items-center gap-6 mb-6">
              <img
                src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${
                  user.rollNumber || "student"
                }&backgroundColor=c0aede`}
                alt="Avatar"
                className="border-2 border-violet-500 rounded-full w-24 h-24"
              />
              <div>
                <h2 className="font-bold text-violet-400 text-3xl">
                  {user.fullName}
                </h2>
                <p className="text-gray-400 text-sm">Role: Student</p>
              </div>
            </div>

            {/* User Meta Info */}
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <p>
                  <span className="text-gray-400">Skills:</span> React, Node.js,
                  MongoDB
                </p>
                <p>
                  <span className="text-gray-400">College:</span>{" "}
                  {user.college || "TMSL"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-10 text-lg text-center">Loading...</div>
        )}
        {/* Questions */}
        <div className="mx-auto mt-10 w-[70%]">
          <h3 className="mb-4 font-bold text-violet-400 text-xl">
            My Questions
          </h3>
          {questions.length > 0 ? (
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
                    alt="Avatar"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm">
                      {q.createdBy?.fullName || "Unknown User"} •
                    </div>
                    <p className="mt-2 text-white">{q.content}</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <span className="text-gray-400">{q.answers} answers</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No questions asked yet.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;
