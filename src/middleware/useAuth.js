import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();

    const checkTokenValidity = () => {
        const token = localStorage.getItem("userInfo");
        if (!token) {
            handleLogout();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("userInfo");
        navigate("/", { replace: true });
    };

    useEffect(() => {
        const interval = setInterval(checkTokenValidity, 5000);

        const handleStorageChange = (event) => {
            if (event.key === "userInfo" && !event.newValue) {
                handleLogout();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            clearInterval(interval);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);
};

export default useAuth;
