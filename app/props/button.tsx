import React from "react";
import "./propCss.css";

type Props = {
  text: string;
  style?: string | undefined;
};

const Button = ({ text, style }: Props) => {
  return (
    <div className="hover:black">
      <button
        className={` scale border border-blue-700 px-5 
            py-2 rounded-md hover:cursor-pointer
              transition duration-150 ${style}
        `}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
