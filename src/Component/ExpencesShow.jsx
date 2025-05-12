import React, { useEffect } from "react";

const ExpencesShow = ({ expenses, setExpenses }) => {
  const currentUserEmail = localStorage.getItem("currentUser");


  useEffect(() => {
    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    const userExpenses = allExpenses[currentUserEmail] || [];
    setExpenses(userExpenses);
  }, [currentUserEmail, setExpenses]);

  const handleDelete = (id) => {
    const updatedExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(updatedExpenses);

    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    allExpenses[currentUserEmail] = updatedExpenses;
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  };

  const handleEdit = (id) => {
    const expenseToEdit = expenses.find((exp) => exp.id === id);
    alert("Edit functionality is triggered!");
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 py-6 px-4">
      {expenses.length > 0 ? (
        expenses.map((expense) => (
          <div
            key={expense.id}
            className="w-full max-w-[750px] bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] border-l-4 border-[#fcb69f] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#2d2d2d]">{expense.title}</h3>
              <span className="text-lg font-bold text-green-600">${expense.amount}</span>
            </div>
            <div className="text-gray-600 mb-1">
              <strong>Category:</strong> {expense.category}
            </div>
            <div className="text-gray-600 mb-1">
              <strong>Date:</strong> {expense.date}
            </div>
            {expense.note && (
              <div className="text-sm text-gray-500 mt-2 italic">
                <strong>Note:</strong> {expense.note}
              </div>
            )}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => handleEdit(expense.id)}
                className="bg-white w-17 text-pink-500 px-4 py-2 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(expense.id)}
                className="bg-white w-17 text-red-500 mb-4 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-gray-700 text-center">No expenses found.</p>
      )}
    </div>
  );
};

export default ExpencesShow;



