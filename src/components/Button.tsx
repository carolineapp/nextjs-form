import React from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  text: string;
  handleOnClick?: () => void;
  type?: "button" | "submit";
};

const Button = ({ href = "", text, type = "button" }: ButtonProps) => (
  <Link href={href}>
    <button type={type} className="px-3 py-1 bg-teal-300">
      {text}
    </button>
  </Link>
);

export default Button;
