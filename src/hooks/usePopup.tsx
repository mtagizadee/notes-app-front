import { useContext } from "react";
import { PopupContext } from "../contexts/PopupProvider";

const usePopup = () => {
  const data = useContext(PopupContext);

  return data;
};

export default usePopup;
