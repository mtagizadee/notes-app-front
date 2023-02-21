import React, { FC, MouseEvent } from "react";
import Modal, { IModalProps } from "../Modal";
import { FiAlertTriangle, FiX } from "react-icons/fi";
import Button from "./Button";

interface IWarningModalProps extends IModalProps {
  /**
   * Function to be called when the user clicks on the confirm button
   * @param event - mouse event emitted by the button
   * @returns void
   * @example
   * const [submit, setSubmit] = useState(false);
   * <WarningModalon onConfirm={() => setSubmit(true)}/>
   */
  onConfirm: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Warning modal component which will be used to show warning messages and ask for confirmation
 * @param IWarningModalProps
 * @returns JSX.Element - warning modal component
 */
const WarningModal: FC<IWarningModalProps> = ({ children, onClose, onConfirm, visible }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 box-500">
        <button
          onClick={onClose}
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <FiX className="w-5 h-5" />
        </button>
        <div className="p-6 text-center">
          <FiAlertTriangle className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{children}</h3>
          <div className="w-full center-content">
            <div className="box-400 center-row gap-3">
              <Button
                color="red"
                onClick={(event) => {
                  onConfirm(event);
                  onClose();
                }}
              >
                Yes, I am sure
              </Button>
              <Button onClick={onClose}>No, cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
