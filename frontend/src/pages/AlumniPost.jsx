import React, { useState } from "react";
import { Briefcase, Lightbulb, BarChart3} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogOut from "../componenets/logout";

const postIcons = {
  Internship: <Briefcase className="w-5 h-5 text-violet-400" />,
  Tips: <Lightbulb className="w-5 h-5 text-yellow-400" />,
  "Industry Insights": <BarChart3 className="w-5 h-5 text-cyan-400" />,
};

const AlumniPost = () => {
  const navigate = useNavigate();
  const [postType, setPostType] = useState("Tips");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postPayload = {
      type: postType,
      content,
    };
    console.log("Post Payload:", postPayload);
    // You can send postPayload to your backend using axios here
  };

  return (
    <div className="flex bg-[#0f0f1c] min-h-screen text-white">
      {/* Left Sidebar Navigation */}
      <aside className="flex flex-col bg-[#0f0f1c] p-6 border-gray-800 border-r w-64">
        <div className="mb-10 font-sans font-bold text-2xl">Alumni Connect</div>
        {/* <button className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition">
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
          className="bg-white mb-2 px-4 py-3 rounded text-black text-left transition"
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

      {/* Post Form */}
      <main className="flex flex-col flex-1 items-center p-8">
        <h1 className="mb-8 font-bold text-violet-400 text-3xl">
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 w-[70%]">
          <div>
            <label className="block mb-3 text-gray-300 text-sm">
              Choose Post Type
            </label>
            <div className="flex gap-4">
              {Object.keys(postIcons).map((type) => (
                <div
                  key={type}
                  onClick={() => setPostType(type)}
                  className={`flex items-center gap-2 cursor-pointer px-4 py-3 rounded-full border transition ${
                    postType === type
                      ? "bg-violet-700 border-violet-500 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-violet-900"
                  }`}
                >
                  {postIcons[type]}
                  <span className="font-medium text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-gray-300 text-sm">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-[#1a1a2e] px-4 py-2 border border-violet-700 rounded w-full min-h-[150px] text-white"
              placeholder="Share your thoughts or opportunities..."
              required
            />
          </div>

          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded font-semibold text-white text-sm"
          >
            Submit Post
          </button>
        </form>
      </main>
    </div>
  );
};

export default AlumniPost;
