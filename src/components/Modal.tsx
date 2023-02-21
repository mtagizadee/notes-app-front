import React, { FC, ReactNode } from "react";

export interface IModalProps {
  children: ReactNode;
  /**
   * Function which will be called whenever the modal is closed
   * @returns void
   * @example
   * const [modalState, setModalState] = useState(false);
   * const closeModal = () => setModalState(false);
   * <Modal visible={modalState} onClose={closeModal} />
   */
  onClose: () => void;
  visible: boolean;
}

/**
 * Modal component which just defines a default behavior for modal
 * @param IModalProps
 * @returns JSX.Element - modal component
 */
const Modal: FC<IModalProps> = ({ children, visible, onClose }) => {
  return (
    <>
      {visible ? (
        <div
          className="fixed top-0 left-0 full-screen center-content bg-black/30 z-30"
          onClick={() => onClose()}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
