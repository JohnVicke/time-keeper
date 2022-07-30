import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endContent?: React.ReactNode;
  containerSize?: "sm" | "md" | "lg";
  label?: string;
}

export const TextInput = ({
  startIcon,
  endContent,
  label,
  containerSize = "md",
  ...props
}: InputProps) => {
  return (
    <div className="form-control relative w-full">
      {label && <label className="label">{label}</label>}
      <div className="absolute top-[50%] translate-y-[-50%] left-2 gap-1">
        {startIcon}
      </div>
      <input
        {...props}
        className={`input input-${containerSize} input-bordered w-full 
        ${!!startIcon ? "pl-8" : "pl-4"}`}
      />
      <div className="absolute top-[50%] translate-y-[-50%] right-2 gap-1 hidden lg:flex">
        {endContent}
      </div>
    </div>
  );
};
