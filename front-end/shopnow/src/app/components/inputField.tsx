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
  passwordState?: boolean;
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
  passwordState,
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
        className={` input-field ${className}`}
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
          {placeholder} field requied
        
        </span>
      )}
      {value && passwordState && (
        <span
          style={{
            color: "red",
            textTransform: "capitalize",
            fontSize: "13px",
            padding: "3px",
          }}
        >
          Password Do not match
        </span>
      )}
    </>
  );
};

export default InputField;
