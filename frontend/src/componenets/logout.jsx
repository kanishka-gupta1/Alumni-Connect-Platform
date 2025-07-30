
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
//   const { socket, setSocket } = useSocket();
  const handleOnclick = async () => {
    try {
      const response = await axios.post(
        "/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.status == 200) {
        localStorage.removeItem("userId");
        navigate("/login");
      }
    //   if (socket) {
    //     socket.disconnect();
    //     console.log("🔌 Socket manually disconnected");
    //     // setSocket(null);
    //   }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      type="button"
      onClick={() => handleOnclick()}
       className="hover:bg-white px-4 py-2 border border-white rounded hover:text-black transition"
    >
      Logout
    </button>
  );
};

export default LogOut;
