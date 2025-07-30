import React from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../componenets/logout";

const AlumniRequest = () => {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      name: "Aryan Sharma",
      college: "TMSL",
      branch: "CSE",
      skills: ["React", "Node.js"],
      message: "Looking for mentorship in web development.",
    },
    {
      id: 2,
      name: "Bhumika Sen",
      college: "RTU Kota",
      branch: "IT",
      skills: ["UI/UX", "JavaScript"],
      message: "Interested in guidance for design internships.",
    },
  ];

  return (
    <div className="flex bg-[#0f0f1c] min-h-screen text-white">
       {/* Left Sidebar Navigation */}
       <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        {/* <button className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition">
          Feed
        </button> */}
        <button
          onClick={() => (navigate("/alumni/profile"))}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Profile
        </button>
        <button
          onClick={() => (navigate("/alumni/questions"))}
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
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
          className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition"
        >
          Connection request
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="mb-8 font-bold text-violet-400 text-3xl">
          Connection Requests
        </h1>
        <div className="space-y-6">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-[#1a1a2e] shadow-md p-6 border border-violet-700/30 rounded-xl"
            >
              <h2 className="font-semibold text-white text-xl">{req.name}</h2>
              <p className="text-gray-400">
                {req.college} - {req.branch}
              </p>
              <p className="mt-2 text-gray-300 text-sm">{req.message}</p>
              <div className="mt-3 text-gray-300 text-sm">
                <span className="text-gray-400">Skills:</span>{" "}
                {req.skills.join(", ")}
              </div>
              <div className="flex gap-3 mt-4">
                <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded text-sm transition">
                  Accept
                </button>
                <button className="hover:bg-red-600 px-4 py-2 border border-gray-500 hover:border-red-600 rounded text-sm transition">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AlumniRequest;
