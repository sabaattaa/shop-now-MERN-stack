import React from "react";

type ButtonFieldProps = {
  name?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const ButtonField: React.FC<ButtonFieldProps> = ({
  name,
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
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonField;
