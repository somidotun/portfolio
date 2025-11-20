import Link from "next/link";

import { useOpenHamburgerMenu } from "@/app/store/openHamburgerMenu";
const Navlist = () => {
  // nav links
  const navs = [
    { id: 1, name: "About", link: "#about" },
    { id: 2, name: "Skill", link: "#skill" },
    // { id: 3, name: "Services", link: "#services" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  // hamburger menu state
  const { setToggled } = useOpenHamburgerMenu();
  return (
    <div
      className="fixed top-0 bottom-0 left-0 
      right-0 z-50 flex flex-col
     w-full h-screen gap-8 bg-white md:gap-12"
    >
      {/* navlinks */}
      {navs.map((nav) => (
        <ul key={nav.id} className=" pt-14 w-full text-center">
          <Link
            className="w-full py-4 text-lg text-blue-700 
            transition-all duration-300 md:text-4xl "
            href={nav.link}
            onClick={() => setToggled(false)}
          >
            {nav.name}
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Navlist;
