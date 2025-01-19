import React from "react";

function Spinner({
  label,
  size,
  loadingClass,
}: {
  label?: string;
  className?: string;
  loadingClass?: boolean;
  size: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`border-gray-300 ${
          sizes[size]
        }  animate-spin rounded-full border-4 ${
          loadingClass ? "border-t-red-600" :"border-t-blue-600"
        }`}
      />
      <label  className="text-white" htmlFor="">
        {label || "Loading..."}
      </label>
    </div>
  );
}

export default Spinner;
