import { HouseSimple, SignOut } from "phosphor-react";

export const MenuLateral = () => {
  return (
    <div className="w-[325px] h-full border-r-[1px] p-4 flex flex-col gap-2">
      <div className="w-full h-20 text-center">
        <h1 className="text-2xl">Manager</h1>
        <small>Description</small>
      </div>
      <div className="w-full h-full flex flex-col gap-2 overflow-auto">
        <ItemMenuLateral
          ativa={true}
          titulo="Inicio"
          icone={<HouseSimple weight="fill" size={24} />}
        />
        <ItemMenuLateral
          titulo="Inicio"
          icone={<HouseSimple weight="fill" size={24} />}
        />
        <ItemMenuLateral
          titulo="Inicio"
          icone={<HouseSimple weight="fill" size={24} />}
        />

        <ItemMenuLateral
          titulo="Inicio"
          icone={<HouseSimple weight="fill" size={24} />}
        />
      </div>
      <div className="w-full  h-10 min-h-[2.5rem] bg-red-600 rounded-md flex justify-between text-white cursor-pointer hover:brightness-125 transition-all font-semibold items-center px-4 gap-2">
        Sair
        <SignOut weight="fill" size={18} />
      </div>
    </div>
  );
};

interface ItemMenuLateralProps {
  titulo: string;
  icone: JSX.Element;
  ativa?: boolean;
}

const ItemMenuLateral = ({ titulo, icone, ativa }: ItemMenuLateralProps) => {
  return (
    <div
      className={`w-full h-10 min-h-[2.5rem] hover:bg-gray-600 hover:text-white transition-all cursor-pointer rounded-md ${
        ativa && "bg-gray-600 text-white"
      }`}
    >
      <div className="w-full h-full flex gap-4 items-center px-4 ">
        {icone} {titulo}
      </div>
    </div>
  );
};
