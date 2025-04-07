import React from "react";

type ButtonProps = {
  text: string;
  handleOnClick?: () => void;
  type?: "button" | "submit";
};

const Button = ({ text, type = "button", handleOnClick }: ButtonProps) => (
  <button
    type={type}
    onClick={handleOnClick}
    className="block mt-3 px-3 py-1 bg-teal-300"
  >
    {text}
  </button>
);

export default Button;
