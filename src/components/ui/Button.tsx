import React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantClasses: Record<Variant, string> = {
  default: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-purple-600 text-white hover:bg-purple-700",
  outline: "border border-gray-300 hover:bg-gray-100 text-black",
  ghost: "bg-transparent hover:bg-gray-100 text-black",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
