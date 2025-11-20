"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const DestopNav = () => {
  // nav links
  const navs = [
    { id: 1, name: "About", link: "#about" },
    { id: 2, name: "Skill", link: "#skill" },
    // { id: 3, name: "Services", link: "#services" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  const pathName = usePathname();
  return (
    <div>
      <nav className="flex flex-row justify-between w-full p-3 px-10 text-base">
        {/* logo */}
        <p className="text-xl ">
          <Link href={"/"}>
            Somidotun<span className="text-blue-700">.dev</span>
          </Link>
        </p>

        {/* navlinks */}
        <div className="flex flex-col  gap-7 md:flex-row">
          {navs.map((nav) => (
            <div
              key={nav.id}
              className={`${pathName === nav.link ? "text-blue-900" : ""}`}
            >
              <Link className="hover:text-blue-700" href={nav.link}>
                {nav.name}
              </Link>
            </div>
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
