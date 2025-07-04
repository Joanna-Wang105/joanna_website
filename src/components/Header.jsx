import { Link, useLocation } from "react-router-dom";

export default function Header({ navLinks }) {
  const location = useLocation();

  return (
    <nav className="navbar bg-base-100 shadow-sm px-20 pt-2">
      <div className="navbar-start flex-1">
        <Link to="/" className="text-xl font-semibold">
          Joanna Wang
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`nav-link text-base ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end  sm:hidden">
        <div className="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow w-62"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`nav-link text-base ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
