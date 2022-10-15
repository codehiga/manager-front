import { List, MagnifyingGlass } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="w-full h-20 px-6 border-b-[1px]">
      <div className="w-full h-full flex items-center gap-4 justify-between">
        <div>
          <List size={24} width="fill" />
        </div>
        <div className="w-[70%] bg-black h-full flex items-center justify-end gap-2"></div>
      </div>
    </div>
  );
};

const BarraPesquisa = () => {
  return (
    <div className="h-10 min-w-[240px] w-auto pl-2 py-2 bg-gray-400 rounded-md flex gap-2 items-center">
      <MagnifyingGlass />
      <input
        type="text"
        className="h-full bg-transparent border-none outline-none pr-2"
      />
    </div>
  );
};
