import React from "react";
import { sidebarContent } from "../utils";
import { lato } from "../fonts/allFonts";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div>
      <ul className="p-0">
        {sidebarContent.map((item, index) => (
          <Link key={index} href={item.link} className="text-decoration-none">
            <li
              className={`p-2 list-unstyled sidebar-text  p-0 ${lato.className}`}
            >
              {item.name || "Unnamed"}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
