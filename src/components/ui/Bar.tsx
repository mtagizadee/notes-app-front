import React, { FC, ReactNode } from "react";
import { getNumbersTo } from "../../common/helpers";

interface IBarProps {
  currrentValue: number;
  maxValue: number;
  element: JSX.Element;
  emptyElement: JSX.Element;
  changable?: boolean;
  increase?: () => void;
  decrease?: () => void;
}

/**
 * A bar component with which can display and handle the value of a bar
 * @param currrentValue - the current value of the bar
 * @param maxValue - the max value of the bar
 * @param element - the element to display when the value is not empty
 * @param emptyElement - the element to display when the value is empty
 * @param changable - if the bar is changable
 * @param increase - the function to increase the value
 * @param decrease - the function to decrease the value
 * @returns
 */
const Bar: FC<IBarProps> = ({
  currrentValue,
  maxValue,
  increase,
  decrease,
  element,
  emptyElement,
}) => {
  return (
    <div className="center-row gap-2">
      {getNumbersTo(maxValue).map((number) => {
        return <Element key={number}>{number < currrentValue ? element : emptyElement}</Element>;
      })}
    </div>
  );
};

interface IElementProps {
  children: ReactNode;
}

const Element: FC<IElementProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Bar;
