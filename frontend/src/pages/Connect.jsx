import React from "react";
import LogOut from "../componenets/logout";
import { useNavigate } from "react-router-dom";

const alumniList = [
  { id: 1, name: "Riya Sharma", position: "Software Engineer at Google" },
  { id: 2, name: "Arjun Mehta", position: "Product Manager at Amazon" },
  { id: 3, name: "Neha Kapoor", position: "UX Designer at Adobe" },
  { id: 4, name: "Rohit Singh", position: "Data Scientist at Microsoft" },
];

const Connect = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Sidebar */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => (navigate("/student"))}
        >
          Feed
        </button>
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => (navigate("/student/profile"))}
        >
          Profile
        </button>
        <button
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
          onClick={() => (navigate("/student/questions"))}
        >
          Questions
        </button>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
          Connect
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h2 className="mb-6 font-bold text-violet-400 text-2xl">
          Find and Connect with Alumni
        </h2>

        <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-2">
          {alumniList.map((alumni) => (
            <div
              key={alumni.id}
              className="flex justify-between items-center bg-[#1a1a2e] shadow-md p-6 border border-gray-700 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${alumni.name}&backgroundColor=c0aede`}
                  alt="Avatar"
                  className="border-2 border-violet-500 rounded-full w-14 h-14"
                />
                <div>
                  <h3 className="font-semibold text-lg">{alumni.name}</h3>
                  <p className="text-gray-400 text-sm">{alumni.position}</p>
                </div>
              </div>
              <button className="bg-violet-500 hover:bg-violet-600 px-4 py-2 rounded text-white transition">
                Connect
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Connect;
