import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-full w-full flex flex-col py-5 pr-4">
      <div className=" flex flex-col h-full justify-between">
        <ul className="flex flex-col gap-4">
          <Link href="/dashboard">
            <li className="bg-indigo-500 p-2 rounded-e-full text-white hover:bg-indigo-600  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ">
              <button>Plataform</button>
            </li>
          </Link>
          <Link href="/dashboard">
            <li className="bg-indigo-500 p-2 rounded-e-full text-white hover:bg-indigo-600  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ">
              marketing
            </li>
          </Link>
          <Link href="/dashboard">
            <li className="bg-indigo-500 p-2 rounded-e-full text-white hover:bg-indigo-600  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ">
              Roadimap
            </li>
          </Link>
          <Link href="/dashboard">
            <li className="bg-indigo-500 p-2 rounded-e-full text-white hover:bg-indigo-600  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 ">
              Create new Board
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
