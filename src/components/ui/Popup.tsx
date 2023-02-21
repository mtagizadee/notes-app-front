import React, { FC, useEffect } from "react";
import { FiX, FiAlertCircle, FiCheckSquare } from "react-icons/fi";

export enum PopupType {
  Success,
  Error,
}

export const POPUP_INITAL_STATE = {
  message: "",
  type: PopupType.Error,
  visible: false,
};

interface IPopupProps {
  message: string;
  /**
   * Type of popup to display, can be either success or error
   * depending on the type respective style will be applied
   * @example
   * <Popup type={PopupType.Success}/>
   */
  type: PopupType;
  visible?: boolean;
  timeout?: number;
  /**
   * Callback function that is called when the popup is going to
   * be closed, popup will not be closed if function is not provided
   * @param void
   * @returns void
   * @example
   * const [popupState, setPopupState] = useState(false);
   * <Popup onClose={() => setPopupState(false)}/>
   */
  onClose: () => void;
}

/**
 * Popup ui component that displays a message to the user
 * @component
 * @param IPopupProps props
 * @returns JSX.Element
 */
const Popup: FC<IPopupProps> = ({ message, type, visible = false, onClose, timeout = 3 }) => {
  // We need to close the popup after a certain amount of time
  useEffect(() => {
    // close popup after timeout
    const timer = setTimeout(() => {
      onClose();
    }, timeout * 1000); // Convert to milliseconds

    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  return (
    <>
      {visible ? (
        <div
          id="toast-default"
          className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-6 right-6 z-40"
          role="alert"
        >
          <div
            className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 ${
              type === PopupType.Success
                ? "bg-blue-100 dark:bg-blue-800"
                : "bg-red-100 dark:bg-red-800"
            } rounded-lg  dark:text-blue-200`}
          >
            {type === PopupType.Success ? <FiCheckSquare /> : <FiAlertCircle />}
          </div>
          <div className="w-full center-row justify-between">
            <div className="ml-3 text-sm font-normal">{message}</div>
            <FiX className="cursor-pointer" size={30} onClick={onClose} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Popup;
