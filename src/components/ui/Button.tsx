import React, { FC, ReactNode, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";

type ButtonColor = "dark" | "red";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * If true, the button will be disabled
   * and the text will be "Loading..."
   * @default false
   */
  disabled?: boolean;
  color?: ButtonColor;
  className?: string;
}

const colorToStyle = {
  dark: "dark-button",
  red: "red-button",
};

/**
 * Button component UI component
 * @param IButtonProps
 * @returns JSX.Element
 */
const Button: FC<IButtonProps> = ({
  type = "button",
  children,
  onClick,
  disabled = false,
  color = "dark",
  className,
}) => {
  return (
    <button
      className={twMerge(
        "w-full px-5 py-2.5 rounded-lg text-sm font-medium focus:outline-none",
        colorToStyle[color],
        className
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {!disabled ? children : "Loading..."}
    </button>
  );
};

export default Button;
