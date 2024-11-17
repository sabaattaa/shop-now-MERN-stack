import React from "react";

type InputFieldProps = {
  name: string;
  type: string;
  value?: any;
  placeholder: any;
  disable?: boolean;
  required?: boolean;
  className?: string;
  errorState?: boolean;
  style?: React.CSSProperties;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
};

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  value,
  style,
  disable,
  required,
  onchange,
  className,
  errorState,
  placeholder,
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        style={style}
        disabled={disable}
        required={required}
        className={className}
        placeholder={placeholder}
        onChange={onchange}
      />
      {required && !value && errorState && (
        <span
          style={{
            color: "red",
            textTransform: "capitalize",
            fontSize: "13px",
            padding: "3px",
          }}
        >
          {name} field requied
        </span>
      )}
    </>
  );
};

export default InputField;
