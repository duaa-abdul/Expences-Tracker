import React, { useEffect, useState } from "react";
// import Header from "../Component/Header";
import Balances from "../Component/Balances";
import Navbar from "../Component/Navbar";
import ExpencesShow from "../Component/ExpencesShow";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const currentUserEmail = localStorage.getItem("currentUser");

  useEffect(() => {
    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    const userExpenses = allExpenses[currentUserEmail] || [];
    setExpenses(userExpenses);
  }, [currentUserEmail]);

  return (
    
      <div className="flex justify-center  items-center min-h-screen p-6">
        <div className="flex w-full max-w-7xl  bg-white  shadow-xl">
          
          <div className="hidden md:block w-1/4 bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] p-6  shadow-md">
        
            <Navbar />
          </div>

         
          <div className="w-full md:w-3/4 p-6 flex flex-col gap-6">
          
            <div className="flex flex-col  items-center gap-6 pt-6">
              <Balances />
              <h2 className="text-3xl font-bold text-center  text-[#2d2d2d] mb-8">
                Your Expenses
              </h2>

              
              <ExpencesShow expenses={expenses} setExpenses={setExpenses} />
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Home;































// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddExpense() {
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [category, setCategory] = useState("Food");
//   const [date, setDate] = useState("");
//   const [note, setNote] = useState("");
//   const [expenses, setExpenses] = useState([]);

//   const navigate = useNavigate();
//   const currentUserEmail = localStorage.getItem("currentUser");

//   useEffect(() => {
//     const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
//     setExpenses(allExpenses[currentUserEmail] || []);
//   }, [currentUserEmail]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newExpense = {
//       id: Date.now(),
//       title,
//       amount: parseFloat(amount),
//       category,
//       date,
//       note,
//     };

//     const updatedExpenses = [...expenses, newExpense];
//     const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
//     allExpenses[currentUserEmail] = updatedExpenses;
//     localStorage.setItem("expenses", JSON.stringify(allExpenses));
//     setExpenses(updatedExpenses);

//     // Deduct from income
//     const allIncomes = JSON.parse(localStorage.getItem("incomes")) || {};
//     const userIncomes = allIncomes[currentUserEmail] || [];
//     const totalIncome = userIncomes.reduce((sum, inc) => sum + inc.amount, 0);
//     const totalExpenses = updatedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
//     const newBalance = totalIncome - totalExpenses;
//     localStorage.setItem("balance", JSON.stringify({ ...JSON.parse(localStorage.getItem("balance")) || {}, [currentUserEmail]: newBalance }));

//     // Reset fields
//     setTitle("");
//     setAmount("");
//     setCategory("Food");
//     setDate("");
//     setNote("");

//     navigate("/home");
//   };

//   const handleDelete = (id) => {
//     const updatedExpenses = expenses.filter((exp) => exp.id !== id);
//     const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
//     allExpenses[currentUserEmail] = updatedExpenses;
//     localStorage.setItem("expenses", JSON.stringify(allExpenses));
//     setExpenses(updatedExpenses);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-pink-200 p-6">
//       <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full border border-pink-300">
//         <h1 className="text-3xl font-bold mb-8 text-center text-pink-500">Add New Expense</h1>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <input type="text" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 p-4 h-14 rounded-lg" required />
//           <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full border border-gray-300 p-4 h-14 rounded-lg" required />
//           <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 p-4 h-14 rounded-lg">
//             <option>Food</option>
//             <option>Travel</option>
//             <option>Shopping</option>
//             <option>Health</option>
//             <option>Other</option>
//           </select>
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-gray-300 p-4 h-14 rounded-lg" required />
//           <textarea placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)} rows="3" className="w-full border border-gray-300 p-4 rounded-lg" />
//           <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600">Add Expense</button>
//         </form>
//       </div>

//       {/* List and Delete Expenses */}
//       <div className="mt-10 w-full max-w-lg">
//         <h2 className="text-xl font-bold mb-4">Your Expenses</h2>
//         {expenses.length === 0 ? <p>No expenses added yet.</p> : (
//           expenses.map((exp) => (
//             <div key={exp.id} className="bg-white shadow p-4 rounded-lg mb-3">
//               <div className="font-semibold">{exp.title}</div>
//               <div>Amount: ${exp.amount}</div>
//               <div>Category: {exp.category}</div>
//               <div>Date: {exp.date}</div>
//               <div className="text-gray-600 text-sm">{exp.note}</div>
//               <button onClick={() => handleDelete(exp.id)} className="mt-2 text-red-500 hover:underline">Delete</button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



