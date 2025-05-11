import React, { useEffect, useState } from 'react';

const Balances = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const currentUserEmail = localStorage.getItem("currentUser");

  useEffect(() => {
 
    const allIncomes = JSON.parse(localStorage.getItem("incomes")) || {};
    const userIncome = allIncomes[currentUserEmail] || [];
    const totalIncome = userIncome.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    setIncome(totalIncome);

    const allExpenses = JSON.parse(localStorage.getItem("expenses")) || {};
    const userExpenses = allExpenses[currentUserEmail] || [];
    const totalExpenses = userExpenses.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    setExpenses(totalExpenses);
  }, [currentUserEmail]);

  const balance = income - expenses;

  return (
    <>
    <div className="w-1/2 mx-auto mt-20  bg-gradient-to-r from-[#ffecd2] to-[#fcb69f]">
      <div className="border-2 border-none rounded-lg w-full p-4 shadow-lg">
        <div className="top mb-4 text-center">
          <h3 className='text-2xl  text-[#2d2d2d] font-bold'>Balance</h3>
          <div className="salary text-3xl font-bold text-[#2d2d2d]">
            ${balance}
          </div>
        </div>
        <div className="bottom flex justify-between text-center">
          <div className="income text-[#ff7e5f] font-bold">
            Income: ${income}
          </div>
          <div className="expenses text-[#ff7e5f] font-bold">
            Expenses: ${expenses}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Balances;

