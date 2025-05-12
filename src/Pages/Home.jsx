import React, { useEffect, useState } from "react";
import Balances from "../Component/Balances";
import Navbar from "../Component/Navbar";
import ExpencesShow from "../Component/ExpencesShow";
import { Menu } from "lucide-react";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentUserEmail = localStorage.getItem("currentUser");

  useEffect(() => {
    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    const userExpenses = allExpenses[currentUserEmail] || [];
    setExpenses(userExpenses);
  }, [currentUserEmail]);

  return (
    <div className="flex flex-col min-h-screen">
    
      <div className="md:hidden p-4 flex justify-between items-center bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]">
        <h2 className="text-2xl font-bold text-[#2d2d2d]">TRACKER</h2>
        <button onClick={() => setIsSidebarOpen(true)}>
          <Menu className="text-[#2d2d2d]" size={28} />
        </button>
      </div>

      <div className="flex flex-1 justify-center items-start p-6">
        <div className="flex w-full max-w-7xl bg-white shadow-xl">
         
          <Navbar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

          <div className="w-full md:w-3/4 p-6 flex flex-col gap-6">
            <div className="flex flex-col items-center gap-6 pt-6">
              <Balances />
              <h2 className="text-3xl font-bold text-center text-[#2d2d2d] mb-8">
                Your Expenses
              </h2>
              <ExpencesShow expenses={expenses} setExpenses={setExpenses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



