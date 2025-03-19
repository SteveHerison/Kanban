import { createContext, useState } from "react";

export type ShowModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
};

const ShowModalContext = createContext<ShowModalProps>({} as ShowModalProps);

const ShowModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("Modal Aberto");
  };

  const closeModal = () => {
    setShowModal(false);
    console.log("Modal Fechad");
  };

  return (
    <ShowModalContext.Provider
      value={{ showModal, setShowModal, openModal, closeModal }}
    >
      {children}
    </ShowModalContext.Provider>
  );
};

export { ShowModalProvider, ShowModalContext };
