import { NavLink } from "react-router-dom";

export default function NavItems({ text, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `mb-7 block rounded-lg px-4 py-2 text-white shadow-sm shadow-indigo-900 transition-colors duration-150 ${
          isActive ? "bg-indigo-700 font-semibold" : "hover:bg-indigo-600"
        }`
      }
      to={to}
    >
      {text}
    </NavLink>
  );
}
