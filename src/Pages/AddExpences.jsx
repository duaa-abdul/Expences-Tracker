import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();
  const currentUserEmail = localStorage.getItem("currentUser");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
      note,
    };

    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    const userExpenses = allExpenses[currentUserEmail] || [];
    const updatedUserExpenses = [...userExpenses, newExpense];

    allExpenses[currentUserEmail] = updatedUserExpenses;
    localStorage.setItem("expenses", JSON.stringify(allExpenses));

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
    setNote("");

    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
        padding: "20px",
      }}
    >
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full border" style={{ borderColor: "#fcb69f", borderWidth: "2px" }}>
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: "#ff7e5f" }}>
          Add New Expense
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Health</option>
            <option>Other</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
            required
          />
          <button
            type="submit"
            className="w-full h-13 py-3 rounded text-white font-semibold shadow-md text-lg transition duration-300"
            style={{ backgroundColor: "#ff7e5f" }}
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}



