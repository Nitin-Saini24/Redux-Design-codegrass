import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label, isActive,sidebarOpen}) => (
  <li>
    <NavLink
      to={to}
      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
        isActive && "bg-graydark dark:bg-meta-4"
      }`}
    >
      <span>{icon}</span>
      <span
        className={`transition-opacity duration-300 ${
          !sidebarOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        {label}
      </span>
    </NavLink>
  </li>
);

export default NavItem;
