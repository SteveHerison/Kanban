"use client";

import { Header } from "@/components/Header";
import { Navbar } from "@/components/pages/dashboard/NavbarItems";
import { UserDropdown } from "@/components/pages/dashboard/UserDropdown";
import { Themetoggle } from "@/components/shared/themeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useTheme } from "next-themes";

import { ReactNode, useState } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const [showOpen, setShowOpen] = useState(true);

  function handleOpen() {
    setShowOpen(!showOpen);
  }
  return (
    <div className="w-full h-screen grid grid-rows-[80px_auto]">
      <div className="w-full h-full border-b border-muted">
        <Header />
      </div>
      <div className="w-full h-full grid  lg:grid-cols-[300px_auto] md:grid-cols-[210px_auto] grid-cols-1 relative">
        {/* Overlay */}
        {showOpen && (
          <div
            className="absolute w-full h-full md:hidden inset-0 bg-black/50 backdrop-blur-xs z-40"
            onClick={handleOpen} // Fechar ao clicar fora
          ></div>
        )}

        {/* Sidebar */}
        {showOpen ? (
          <aside
            className={cn(
              "h-full flex flex-col border-e border-muted  transition-all",
              showOpen ? "absolute z-50  md:relative " : " md:flex",
              theme === "dark"
                ? "bg-zinc-800 md:bg-accent"
                : "bg-white md:bg-accent"
            )}
          >
            <div
              className={cn(showOpen ? "absolute  w-full h-full -z-50" : "")}
            ></div>

            <div className="w-full p-6 ">
              <h2>logo</h2>
            </div>
            <Navbar />
            <div className="w-full flex flex-col-reverse">
              <div className="w-full flex mt-auto border-t border-muted items-center py-4 justify-between gap-2 px-1">
                <UserDropdown />
                <Themetoggle />
              </div>
              <div className="mb-4">
                <Button
                  onClick={handleOpen}
                  className="rounded-r-full bg-transparent hover:bg-indigo-500 hover:text-zinc-300 text-zinc-600 transition-all"
                >
                  <PanelLeftClose />
                  Fechar Navegador
                </Button>
              </div>
            </div>
          </aside>
        ) : (
          <div
            className={cn(" bottom-[90px]", showOpen ? "hidden" : "absolute")}
          >
            <Button
              onClick={handleOpen}
              className="rounded-r-full hover:bg-indigo-600 bg-indigo-500"
            >
              <PanelLeftOpen />
            </Button>
          </div>
        )}

        {/* Conteúdo Principal */}
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
}
