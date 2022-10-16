import { Bell, List, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

export const Navbar = () => {
  const [notification, setNotification] = useState();

  return (
    <div className="w-full h-20 px-6 border-b-[1px]">
      <div className="w-full h-full flex items-center gap-4 justify-between">
        <div>
          <List size={24} width="fill" />
        </div>
        <div className="w-[70%] h-full flex items-center justify-end gap-4">
          <div className="w-auto h-full flex items-center">
            <div className="w-auto flex flex-col gap-2 items-center cursor-pointer">
              <Bell className="relative w-6" size={24} weight="fill" />
              {notification && (
                <span className="w-2 h-2 block bg-red-700 rounded-full"></span>
              )}
            </div>
          </div>

          <PerfilUsuario />
        </div>
      </div>
    </div>
  );
};

const PerfilUsuario = () => {
  return (
    <div className="w-auto h-full flex items-center gap-3">
      <div className="text-right leading-5">
        <h3 className="font-bold">Henrique Higa</h3>
        <small>Administrador</small>
      </div>

      <div className="min-w-[40px] min-h-[40px] w-10 h-10 flex bg-gray-700 rounded-full">
        <img
          className="w-full h-full rounded-full"
          src="https://avatars.githubusercontent.com/u/103391897?v=4"
          alt=""
        />
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
