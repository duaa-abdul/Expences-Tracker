import { NavLink } from "react-router-dom";

const Navbar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`h-screen bg-gradient-to-b from-[#ffecd2] to-[#fcb69f] text-white p-6
      fixed top-0 left-0 z-50 w-64 transform transition-transform duration-300 md:static md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
    
      <div className="md:hidden flex justify-end">
        <button onClick={onClose} className="text-[#2d2d2d] text-2xl font-bold">&times;</button>
      </div>

      <h2 className="text-3xl font-bold text-center text-[#2d2d2d] m-4" style={{ color: "#ff7e5f" , margin:'20px'}}>BudgetBox </h2>

      <nav className="flex flex-col  gap-4 ">
        <NavLink
          to="/home"
          onClick={onClose}
          className={({ isActive }) =>
            `px-4 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? " text-[#2d2d2d] " : "hover:bg-[#ffe3c2]"}`
          }
           style={{paddingLeft:'10px' , marginTop:'10px'}}
        >
          🏠 Home
        </NavLink>
        <NavLink
          to="/add-expense"
          onClick={onClose}
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? "bg-gray-700 text-white" : "hover:bg-[#ffe3c2]"}`
          }
           style={{paddingLeft:'10px'}}
        >
          ➕ Add Transaction
        </NavLink>
        <NavLink
          to="/add-income"
          onClick={onClose}
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? "bg-gray-700 text-white" : "hover:bg-[#ffe3c2]"} `
    
          }
           style={{paddingLeft:'10px'}}
        >
          💰 Add Income
        </NavLink>
        <NavLink
          to="/Logout"
          onClick={onClose}
          className={({ isActive }) =>
            `px-4 py-2 text-xl w-[120px] font-semibold rounded transition text-[#2d2d2d] bg-[#ff7e5f] ${
              isActive ? "bg-gray-700 text-white" : "bg-[#ffe3c2]"}`
          }
           style={{paddingLeft:'10px'}}
        >
          📂 Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
