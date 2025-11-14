// import Link from "next/link";

// const Navlist = () => {
//   // nav links
//   const navs = [
//     { id: 1, name: "About", link: "/about" },
//     { id: 2, name: "Services", link: "/services" },
//     { id: 3, name: "Projects", link: "/projects" },
//     { id: 4, name: "Contact", link: "/contact" },
//   ];

//   return (
//     <div className="fixed top-0 bottom-0 left-0 flex flex-col w-full h-full p-5 px-0 bg-gray-400 z-100 md:gap-7 md:flex-row">
//       {/* navlinks */}
//       {navs.map((nav) => (
//         <ul className="bg-gray-400 " key={nav.id}>
//           <Link className="hover:text-blue-700" href={nav.link}>
//             {nav.name}
//           </Link>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default Navlist;

import Link from "next/link";

const Navlist = () => {
  // nav links
  const navs = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Services", link: "/services" },
    { id: 3, name: "Projects", link: "/projects" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col w-full h-screen gap-8 bg-white md:gap-12">
      {/* navlinks */}
      {navs.map((nav) => (
        <ul key={nav.id} className="w-full text-center">
          <Link
            className="w-full py-4 text-lg text-blue-700 transition-all duration-300 md:text-4xl "
            href={nav.link}
          >
            {nav.name}
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Navlist;
