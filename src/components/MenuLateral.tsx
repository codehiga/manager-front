import { SignOut } from "phosphor-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAlternaMenu } from "../hooks/useAlternaMenu";
import { pages } from "../utils/Pages";

export const MenuLateral = () => {
  const { ativo } = useAlternaMenu();

  return (
    <div
      className={`w-[325px] h-full border-r-[1px] p-4  flex-col gap-2 absolute bg-white md:static z-50 ${
        ativo == true ? "flex" : "hidden"
      }`}
    >
      <div className="w-full h-20 text-center">
        <h1 className="text-2xl">Manager</h1>
        <small>Description</small>
      </div>
      <RetornaMenu />
      <div className="w-full  h-10 min-h-[2.5rem] bg-red-600 rounded-md flex justify-between text-white cursor-pointer hover:brightness-125 transition-all font-semibold items-center px-4 gap-2">
        Sair
        <SignOut weight="fill" size={18} />
      </div>
    </div>
  );
};

const RetornaMenu = () => {
  const [pathAtual, setPathAtual] = useState<string>("/");
  const { pathname } = useLocation();

  useEffect(() => {
    setPathAtual(pathname);
  }, [pathname]);

  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-auto">
      {pages.map((page, i) => {
        return (
          <ItemMenuLateral
            key={i}
            url={page.url}
            icone={page.icone}
            titulo={page.titulo}
            ativa={pathAtual === page.url && true}
            click={setPathAtual}
          />
        );
      })}
    </div>
  );
};

interface ItemMenuLateralProps {
  titulo: string;
  icone: JSX.Element;
  ativa?: boolean;
  url: string;
  click: Dispatch<SetStateAction<string>>;
}

const ItemMenuLateral = ({
  titulo,
  icone,
  ativa,
  url,
  click,
}: ItemMenuLateralProps) => {
  return (
    <div
      className={`w-full h-10 min-h-[2.5rem] hover:bg-gray-600 hover:text-white transition-all cursor-pointer rounded-md ${
        ativa && "bg-gray-600 text-white"
      }`}
      onClick={() => {
        click(url);
      }}
    >
      <Link to={url} className="w-full h-full flex gap-4 items-center px-4 ">
        {icone}
        {titulo}
      </Link>
    </div>
  );
};
