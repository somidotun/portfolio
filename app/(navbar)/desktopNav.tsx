"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import ThemeState from "../store/themeState";

const DestopNav = () => {
  // nav links
  const navs = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  const pathName = usePathname();
  return (
    <div>
      <nav className="flex flex-row justify-between w-full p-3 text-sm">
        {/* logo */}
        <p className="">
          <Link href={"/"}>
            Somidotun<span className="text-blue-700">.dev</span>
          </Link>
        </p>

        {/* navlinks */}
        <div className="flex flex-col  gap-7 md:flex-row">
          {navs.map((nav) => (
            <ul
              key={nav.id}
              className={`${pathName === nav.link ? "text-blue-900" : ""}`}
            >
              <Link className="hover:text-blue-700" href={nav.link}>
                {nav.name}
              </Link>
            </ul>
          ))}
        </div>

        {/* dark mode */}
        {/* <div className="w-[33%]">
          <ThemeState />
        </div> */}
      </nav>
    </div>
  );
};

export default DestopNav;
