import { NavLink } from "react-router-dom";

const links = [
  { name: "Album", path: "./album" },
  { name: "Club", path: "club" },
  {},
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-gray-700 dark:text-gray-200">
        Admin Panel
      </h2>
      <nav className="flex-1">
        {links.map((link) => (
          <NavLink key={link.path} to={link.path} className="d-flex">
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
