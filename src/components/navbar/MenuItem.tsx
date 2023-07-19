import { IconType } from "react-icons";
import { FaBook, FaHome } from "react-icons/fa";
import Button from "../ui/Button";

const MenuItem = () => {
  const menus = [
    {
      name: "Home",
      icon: <FaHome />,
      route: "/",
    },
    {
      name: "all books",
      icon: <FaBook />,
      route: '/all-books'
    }
  ];
  return (
    <ul className="flex items-center gap-8">
      {menus.map((menu, index) => (
        <li className="flex items-center gap-x-1 text-gray-300 capitalize" key={index}>
          <span>{menu.icon}</span>
          <a href={menu.route}>{menu.name}</a>
        </li>
      ))}
      <li>
        <Button className="border border-gray-400 bg-transparent text-gray-400 hover:bg-gray-700 "> Log in</Button>
      </li>
      <li>
        <Button className="bg-white text-gray-600 hover hover:opacity-90 transition-opacity duration-300">Sign Up</Button>
      </li>
    </ul>
  );
};
export default MenuItem;