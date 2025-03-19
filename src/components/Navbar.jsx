import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigation = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn rounded-md ${
              isActive
                ? "bg-blue-900 text-white"
                : "hover:bg-blue-800 hover:text-white"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addStock"
          className={({ isActive }) =>
            `btn rounded-md mx-3 ${
              isActive
                ? "bg-blue-900 text-white"
                : "hover:bg-blue-800 hover:text-white"
            }`
          }
        >
          Add Stock
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stock"
          className={({ isActive }) =>
            `btn rounded-md ${
              isActive
                ? "bg-blue-900 text-white"
                : "hover:bg-blue-800 hover:text-white"
            }`
          }
        >
          All Stocks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-white/80 backdrop-blur-xl sticky top-0 w-full z-50 shadow-md">
      <div className="navbar  max-w-screen-xl mx-auto border-0">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-md z-10 mt-3 w-52 p-2 shadow-lg border border-blue-900"
            >
              {navigation}
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl text-blue-900 flex items-center gap-2">
            <img
              className="w-10 h-10"
              src="https://img.icons8.com/?size=100&id=48253&format=png&color=000000"
              alt="Logo"
            />
            Janata Stocks
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigation}</ul>
        </div>

        {/* Login Button */}
        <div className="navbar-end">
          <a className="btn bg-blue-900 text-white hover:bg-blue-800">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
