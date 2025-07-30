import axios from "axios";
import { useNavigate } from "react-router-dom";

export default async function logout() {
    const navigate = useNavigate();
    try {
        const response = await axios.post("/api/user/logout", {},
            {
                withCredentials: true,
            });

        if (response.status == 200) {
            localStorage.removeItem("userId");
            navigate("/login");
        }
        // if (socket) {
        //     socket.disconnect();
        //     console.log("🔌 Socket manually disconnected");
        //     // setSocket(null);
        // }
    } catch (error) {
        console.error(error);
    }
}   