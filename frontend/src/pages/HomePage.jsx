// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const tips = [
//     `"Be curious and never stop learning." - John Doe`,
//     `"Don't be afraid to take risks and follow your passion." - Jane Smith`,
//     `"Networking is key to success in any field." - Mark Lee`,
//     `"Consistency beats talent in the long run." - Anna Liu`,
//     `"Your first job may not be your dream job, but it's the stepping stone." - Emily Wong`,
//   ];

//   return (
//     <div className="bg-black pb-12 min-h-screen text-white">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center bg-black px-6 py-4 text-white">
//         <div className="font-sans font-bold text-2xl">Alumni Connect</div>
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={() => navigate('/signup-alumni')}
//             className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
//           >
//             Sign Up as Alumni
//           </button>
//           <button
//             onClick={() => navigate('/signup-student')}
//             className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
//           >
//             Sign Up as Student
//           </button>
//           <button
//             onClick={() => navigate('/login')}
//             className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
//           >
//             Login
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="mt-12 text-center">
//         <h2 className="drop-shadow-md font-semibold text-3xl">Connect with your Alumni</h2>
//         <p className="drop-shadow-sm mt-3 text-gray-300 text-lg">
//           Get life-changing suggestions and tips for your engineering adventure.
//         </p>
//       </div>

//       {/* Recent Tips */}
//       <div className="mt-12 text-center">
//         <h3 className="mb-6 font-semibold text-2xl">Recent Alumni Tips</h3>
//         <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6">
//           {tips.map((tip, index) => (
//             <div key={index} className="bg-gray-800 shadow-md p-6 rounded-lg">
//               <p>{tip}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#0f0f1c] min-h-screen overflow-hidden text-white">
      {/* Background violet blur gradients */}
      <div className="flex sm:flex-row flex-col justify-end gap-4 mt-4 px-4 w-full">
        <button
          className="bg-violet-600 hover:bg-violet-700 shadow-md px-6 py-2 rounded-lg text-white text-lg"
          onClick={() => navigate("/signup-student")}
        >
          Signup
        </button>
        <button
          variant="outline"
          className="bg-white px-6 py-2 border-white rounded-lg text-black text-lg"
          onClick={() => navigate("/login")}
        >
          LogIn
        </button>
      </div>
      <div className="top-[-10%] left-[-10%] z-0 absolute bg-purple-700 opacity-30 blur-3xl rounded-full w-[400px] h-[400px] filter" />
      <div className="right-[-10%] bottom-[-10%] z-0 absolute bg-violet-900 opacity-30 blur-3xl rounded-full w-[400px] h-[400px] filter" />

      <main className="z-10 relative flex flex-col justify-center items-center px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-extrabold text-transparent text-5xl md:text-6xl"
        >
          Connect. Mentor. Grow.
        </motion.h1>
        <p className="mt-6 max-w-2xl text-gray-300 text-lg">
          A smart platform that bridges the gap between alumni and students in
          technical education. Powered by AI for personalized mentorship and
          guidance.
        </p>

        <div className="space-y-16 mt-16 w-full max-w-5xl">
          {/* Mentorship Section */}
          <div className="flex md:flex-row flex-col items-center gap-8 text-left">
            <div className="bg-[#1a1a2e] shadow-lg p-6 rounded-xl w-full md:w-1/2">
              <h3 className="font-semibold text-violet-400 text-xl">
                Mentorship
              </h3>
              <p className="mt-2 text-gray-300 text-sm">
                Connect with experienced alumni for one-on-one mentorship based
                on your career interests. These mentors provide guidance on
                choosing the right path, preparing for industry roles, and
                avoiding common early-career pitfalls.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {/* <img
                src="/illustrations/mentorship.svg"
                alt="Mentorship Illustration"
                className="w-full h-auto"
              /> */}
            </div>
          </div>

          {/* Tips & Guidance Section */}
          <div className="flex md:flex-row-reverse flex-col items-center gap-8 text-left">
            <div className="bg-[#1a1a2e] shadow-lg p-6 rounded-xl w-full md:w-1/2">
              <h3 className="font-semibold text-violet-400 text-xl">
                Tips & Guidance
              </h3>
              <p className="mt-2 text-gray-300 text-sm">
                Alumni can share practical tips, personal experiences, and
                curated resources to help students excel academically and
                professionally. From managing time to cracking interviews, learn
                from those who’ve been there.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {/* <img
                src="/illustrations/tips.svg"
                alt="Tips Illustration"
                className="w-full h-auto"
              /> */}
            </div>
          </div>

          {/* Internship & Job Posts Section */}
          <div className="flex md:flex-row flex-col items-center gap-8 text-left">
            <div className="bg-[#1a1a2e] shadow-lg p-6 rounded-xl w-full md:w-1/2">
              <h3 className="font-semibold text-violet-400 text-xl">
                Internship & Job Posts
              </h3>
              <p className="mt-2 text-gray-300 text-sm">
                Alumni can post internships and job opportunities directly on
                the platform, giving students early access to industry roles and
                exclusive career paths. Personalized suggestions help match
                students with relevant openings.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              {/* <img
                src="/illustrations/jobs.svg"
                alt="Jobs Illustration"
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
      </main>

      <footer className="bottom-4 absolute w-full text-gray-400 text-sm text-center">
        &copy; 2025 AlumniConnect. All rights reserved.
      </footer>
    </div>
  );
}
