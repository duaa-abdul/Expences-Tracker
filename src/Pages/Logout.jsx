import React, { useEffect } from "react";
import { auth } from "../Config/Firebase.config"; 
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        await signOut(auth);

        localStorage.removeItem("currentUser");
        navigate("/");
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    handleLogout(); 
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg font-medium">Logging out...</p>
    </div>
  );
};

export default Logout;
