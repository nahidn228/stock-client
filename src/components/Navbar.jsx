import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navigation = (
    <>
      <li>
        <NavLink className="btn rounded-xl " to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="btn rounded-xl mx-3" to="/addStock">
          Add Stock
        </NavLink>
      </li>
      <li>
        <NavLink className="btn rounded-xl" to="/stock">
          All Stocks
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white/35 backdrop-blur-xl sticky top-0 w-full z-50 ">
      <div className="navbar w-11/12 mx-auto border-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navigation}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigation}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
