import React from "react";
interface inputProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  styleClass: string;
  label?:string;
  type:string;
  placeholderText:string

}
const Inputs = ({ name, placeholderText, type, label, value, handleChange, styleClass }:inputProps) => {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label className="text-[16px] text-[#181818] font-sfprodm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={styleClass}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default Inputs;