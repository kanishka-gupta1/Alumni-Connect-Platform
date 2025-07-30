import React, { useEffect, useState } from "react";
import LogOut from "../componenets/logout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AlumniProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]); // State for user's posts

  const getUser = async () => {
    try {
      const response = await axios.get("/api/user/current-user");
      setUser(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      } else {
        console.error("Failed to fetch user:", error);
      }
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await axios.get("/api/user/my-posts"); // Replace with your API endpoint
      setPosts(response.data.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  useEffect(() => {
    getUser();
    getUserPosts();
  }, []);

  return (
    <div className="flex bg-black min-h-screen text-white">
      {/* Left Sidebar Navigation */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
          Profile
        </button>
        <button
          onClick={() => navigate("/alumni/questions")}
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
          className="hover:bg-white mb-2 px-4 py-3 rounded hover:text-black text-left transition"
        >
          Connection request
        </button>
        <div className="mt-auto">
          <LogOut />
        </div>
      </aside>

      {/* Profile Content */}
      {user ? (
        <div className="flex-1 bg-[#0f0f1c] px-6 py-10 min-h-screen text-white">
          <div className="bg-[#1a1a2e] shadow-lg mx-auto p-6 rounded-xl max-w-4xl">
            <div className="flex items-center gap-6 mb-6">
              <img
                src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${
                  user.rollNumber || "alumni"
                }&backgroundColor=c0aede`}
                alt="Avatar"
                className="border-2 border-violet-500 rounded-full w-24 h-24"
              />
              <div>
                <h2 className="font-bold text-violet-400 text-3xl">
                  {user.fullName}
                </h2>
                <p className="text-gray-400 text-sm">Role: Alumni</p>
              </div>
            </div>
            <div className="gap-6 grid md:grid-cols-2">
              <div>
                <p>
                  <span className="text-gray-400">Graduation Year:</span>{" "}
                  {user.graduationYear || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Company:</span>{" "}
                  {user.company || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Position:</span>{" "}
                  {user.position || "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Skills:</span>{" "}
                  {user.skills ? user.skills.join(", ") : "N/A"}
                </p>
                <p>
                  <span className="text-gray-400">Willing to Mentor:</span>{" "}
                  {user.willingToMentor ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>

          {/* User Posts Section */}
          <div className="bg-[#1a1a2e] shadow-lg mx-auto mt-8 p-6 rounded-xl max-w-4xl">
            <h3 className="mb-4 font-bold text-violet-400 text-2xl">
              My Posts
            </h3>
            {posts.length > 0 ? (
              <ul className="space-y-4">
                {posts.map((post, index) => (
                  <li
                    key={index}
                    className="bg-[#0f0f1c] p-4 border border-gray-700 rounded-md"
                  >
                    <h4 className="font-semibold text-white text-lg">
                      {post.title}
                    </h4>
                    <p className="mt-2 text-gray-400 text-sm">
                      {post.content}
                    </p>
                    <p className="mt-2 text-gray-500 text-xs">
                      Posted on: {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">You have not created any posts yet.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="pt-10 text-lg text-center">Loading...</div>
      )}
    </div>
  );
};

export default AlumniProfile;