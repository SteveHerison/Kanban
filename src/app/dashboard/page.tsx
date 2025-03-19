"use client";
import { useContext } from "react";
import Home from "../pages/home";
import { ShowModalContext } from "@/conexts/showModalContext";
// Corrija o caminho se necessário

export default function Dashboard() {
  const { showModal, closeModal } = useContext(ShowModalContext);
  return (
    <main className="w-full h-full relative">
      {showModal && (
        <div className="w-full h-full absolute   flex items-center justify-center z-40">
          <div className="w-96 h-96 flex items-center justify-center dark:bg-black bg-white rounded-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-1 right-1 bg-black dark:bg-white text-white dark:text-black rounded-full h-7 w-7"
            >
              X
            </button>
            <div>Modal Aberto</div>
          </div>
        </div>
      )}
      <Home />
    </main>
  );
}
