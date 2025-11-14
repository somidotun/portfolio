import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeState = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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

  return (
    <div>
      <div className="hover:cursor-pointer flex justify-end ">
        <div>
          {theme === "dark" ? (
            <motion.div variants={variant1} initial="hidden" animate="visible">
              <FaSun onClick={toggleTheme} className="text-xl" />
            </motion.div>
          ) : (
            <motion.div variants={variant2} initial="hidden" animate="visible">
              <FaMoon onClick={toggleTheme} className="text-xl" />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeState;
