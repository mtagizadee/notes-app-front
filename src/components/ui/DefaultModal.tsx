import React, { FC } from "react";
import Button from "./Button";
import Modal, { IModalProps } from "../Modal";

interface IDefaultModalProps extends IModalProps {
  title: string;
}

const DefaultModal: FC<IDefaultModalProps> = ({ visible, onClose, children, title }) => {
  return (
    <Modal visible={visible} onClose={onClose}>
      <div className="box-600 h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3>{title}</h3>
            <button
              type="button"
              onClick={() => onClose()}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">{children}</div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <Button onClick={() => onClose()}> Finish and close </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DefaultModal;
