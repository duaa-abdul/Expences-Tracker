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
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-[900px] border" style={{ borderColor: "#fcb69f", borderWidth: "2px" }}>
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: "#ff7e5f" , margin:'20px' }}>
          Add New Expense
        </h1>

        <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4 items-center" 
>
  <input
    type="text"
    placeholder="Expense Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-[400px] border border-gray-300 p-4 pl-8 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
     style={{ paddingLeft: '20px' }}
    required
  />
  <input
    type="number"
    placeholder="Amount"
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
    className="w-[400px] border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
      style={{ paddingLeft: '20px' }}
    required
  />
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-[400px] border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
      style={{ paddingLeft: '20px', paddingRight:'20px' }}
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
    className="w-[400px] border border-gray-300 p-4 h-14 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcb69f]"
     style={{ paddingLeft: '20px', paddingRight:'10px' }}
    required
  />
  <button
    type="submit"
    className="w-[200px] px-6 bg-[#ff7e5f] hover:bg-[#ff6744] h-13 py-3 rounded text-white font-semibold shadow-md text-lg transition duration-300"
    style={{ margin: '20px' }}
  >
    Add Expense
  </button>
</form>

      </div>
    </div>
  );
}



