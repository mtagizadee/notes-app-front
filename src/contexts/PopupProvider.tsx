import React, { createContext, ReactNode, useState, FC } from "react";
import Popup, { PopupType } from "../components/ui/Popup";

interface IPopupProviderProps {
  children: ReactNode;
}

export type TPopupContext = {
  displayPopup: (message: string, type: PopupType) => void;
};

export const PopupContext = createContext<TPopupContext>({} as any);

const PopupPropvider: FC<IPopupProviderProps> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [type, setType] = useState<PopupType>(PopupType.Success);
  const [message, setMessage] = useState<string>("");

  const displayPopup = (message: string, type: PopupType) => {
    setMessage(message);
    setType(type);
    setVisible(true);
  };

  return (
    <>
      <PopupContext.Provider value={{ displayPopup }}>
        {children}
      </PopupContext.Provider>
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        type={type}
        message={message}
      />
    </>
  );
};

export default PopupPropvider;
