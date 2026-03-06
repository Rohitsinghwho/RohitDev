import { navLinks } from "@/data/Nav.jsx";
import React from "react";
import { Separator } from "./ui/separator";
import { Link, useLocation } from "react-router-dom";

const NavTabs = () => {
  const location=useLocation();
  return (
    <div className="flex flex-col gap-4">
      <ul className="flex gap-4 ">
        {navLinks.map((items) => {
          const isActive=location.pathname===items.link
          return(
          <li
            key={items.link}
            className={`py-2 flex gap-1 cursor-pointer items-center text-sm ${isActive?'text-[#48ea69] border-b border-b-[#48ea69]':''} `}
          >
            {items.icon}
            <Link to={items.link}>{items.text}</Link>
          </li>)
        })}
      </ul>
      <Separator />
    </div>
  );
};

export default NavTabs;
