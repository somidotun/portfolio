"use client";
import Link from "next/link";
import ThemeState from "../../store/themeState";
import { IoIosMenu } from "react-icons/io";
// import Navlist from "./navlist";
import { motion } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import { useOpenHamburgerMenu } from "@/app/store/openHamburgerMenu";
import dynamic from "next/dynamic";

const DynamicNavlints = dynamic(() => import("./navlist"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const MobileNav = () => {
  // animation

  const variant3 = {
    // initial
    hidden: {
      x: 0,
    },

    // animate
    visible: {
      x: 100,
      transition: {
        duration: 0.5,
      },
    },
  };

  // animation variant
  const variant1 = {
    // initial
    hidden: {
      rotate: 0,
    },

    // animate
    visible: {
      rotate: 360,
      transition: {
        duration: 0.5,
      },
    },
  };

  //   variant 2
  const variant2 = {
    // initial
    hidden: {
      rotate: 0,
    },

    // animate
    visible: {
      rotate: -360,
      transition: {
        duration: 0.5,
      },
    },
  };

  // hamburger menu state
  const { isToggled, toggle } = useOpenHamburgerMenu();
  return (
    <div className="">
      <nav className="relative flex flex-row justify-between w-full p-3 ">
        {/* logo */}
        <p className="text-xl ">
          <Link href={"/"}>
            Somidotun<span className="text-blue-700">.dev</span>
          </Link>
        </p>

        {/* hamburger  menu and dark mode */}

        <div className="flex flex-row gap-2">
          {/* hamburger menu  */}
          <div onClick={toggle}>
            {isToggled ? (
              <motion.div
                variants={variant1}
                initial="hidden"
                animate="visible"
              >
                <MdOutlineCancel className="text-xl" />
              </motion.div>
            ) : (
              <motion.div
                variants={variant2}
                initial="hidden"
                animate="visible"
              >
                <IoIosMenu className="text-xl" />
              </motion.div>
            )}
          </div>
        </div>
      </nav>
      <motion.div
        variants={variant3}
        className="top-0"
        initial="hidden"
        animate="visible"
      >
        <div>{isToggled && <DynamicNavlints />}</div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
