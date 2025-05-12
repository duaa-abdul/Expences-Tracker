import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddIncome() {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const currentUserEmail = localStorage.getItem("currentUser");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      id: Date.now(),
      amount: parseFloat(amount),
      source,
      date,
    };

    const allIncomes = JSON.parse(localStorage.getItem("incomes")) || {};
    const userIncomes = allIncomes[currentUserEmail] || [];

    const updatedIncomes = [...userIncomes, newIncome];
    allIncomes[currentUserEmail] = updatedIncomes;
    localStorage.setItem("incomes", JSON.stringify(allIncomes));

    setAmount("");
    setSource("");
    setDate("");

    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4 items-center border border-[#fcb69f] "
      >
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#ff7e5f" , margin:'20px'}}>
          Add Income
        </h2>

        <div className="mb-5  ">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-[400px] h-14 px-4 py-4 rounded-lg border border-[#fcb69f] focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
            placeholder="Enter amount"
              style={{ paddingLeft: '20px', paddingRight:'10px' }}
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-[400px]  h-14 px-4 py-4 rounded-lg border border-[#fcb69f] focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
            placeholder="Enter income source"
              style={{ paddingLeft: '20px', paddingRight:'10px' }}
            required
          />
        </div>

        <div className="mb-8">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[400px] h-14 px-4 py-4 rounded-lg border border-[#fcb69f] focus:outline-none focus:ring-2 focus:ring-[#ff7e5f]"
              style={{ paddingLeft: '20px', paddingRight:'10px' }}
            required
          />
        </div>

        <button
          type="submit"
          className="w-[200px] h-12 bg-[#ff7e5f] hover:bg-[#ff6d4d] text-white font-semibold py-4 rounded-lg transition duration-200"
             style={{ margin: '20px' }}
        >
          Add Income
        </button>
      </form>
    </div>
  );
}


