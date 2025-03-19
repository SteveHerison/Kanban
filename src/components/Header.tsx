import { useContext } from "react";
import { Button } from "./ui/button";
import { ShowModalContext } from "@/conexts/showModalContext";

export const Header = () => {
  const { openModal } = useContext(ShowModalContext);
  return (
    <header className="w-full h-full flex items-center container mx-auto px-2 ms:px-0 ">
      <div className="w-full justify-between flex items-center">
        <h2>HeriKanban </h2>
        <Button
          onClick={openModal}
          className="bg-indigo-500 text-white hover:bg-indigo-600 transition-all"
        >
          +Add New Task
        </Button>
      </div>
    </header>
  );
};
