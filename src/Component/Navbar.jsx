import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#ffecd2] to-[#fcb69f] text-white p-6">
      <h2 className="text-3xl font-bold text-center text-[#2d2d2d] m-4">TRACKER</h2>

      <nav className="flex flex-col items-center space-y-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? " text-[#2d2d2d] " : "hover:bg-[#ffe3c2]"
            }`
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/add-expense"
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? "bg-gray-700 text-white" : "hover:bg-[#ffe3c2]"
            }`
          }
        >
          ➕ Add Transaction
        </NavLink>

        <NavLink
          to="/add-income"
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] ${
              isActive ? "bg-gray-700 text-white" : "hover:bg-[#ffe3c2]"
            }`
          }
        >
          💰 Add Income
        </NavLink>
          <NavLink
          to="/Logout"
          className={({ isActive }) =>
            `px-4 py-2 text-xl font-semibold rounded transition text-[#2d2d2d] bg-[#ff7e5f]${
              isActive ? "bg-gray-700 text-white" : "hover:bg-[#ffe3c2]"
            }`
          }
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

