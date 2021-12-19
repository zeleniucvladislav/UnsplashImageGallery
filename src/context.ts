import { createContext, useContext } from "react";

type Modal = {
  modal: boolean;
  setModal: (m: boolean) => void;
};

export const ModalContext = createContext<Modal>({
  modal: false,
  setModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
