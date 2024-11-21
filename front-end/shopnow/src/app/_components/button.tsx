import Link from "next/link";
import React from "react";

type ButtonFieldProps = {
  name?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ButtonField: React.FC<ButtonFieldProps> = ({
  name,
  link,
  type = "button",
  onClick,
  disabled,
  className,
  style,
  children,
}) => {
  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 px-3  rounded-2 b-gray  ${className}`}
      style={style}
    >
      <Link href={link||"#"} passHref className="text-decoration-none text-black">
        {children}
      </Link>
    </button>
  );
};

export default ButtonField;
