import { FC, InputHTMLAttributes } from "react";

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      onChange={onChange}
      className={"rounded-md text-light bg-dark p-2"}
    />
  );
};

export default Input;
