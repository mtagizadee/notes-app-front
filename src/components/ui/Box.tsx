import React, { ReactNode, FC } from "react";
import { twMerge } from "tailwind-merge";

interface IBoxProps {
  children: ReactNode;
  className?: string;
}

/**
 * Box UI compoent for displaying content in a box
 * @param IBoxProps
 * @returns JSX.Element
 * @example
 * <Box className="w-full max-w-[300px]">
 *  <div> Some content here </div>
 * </Box>
 */
const Box: FC<IBoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "p-6 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
