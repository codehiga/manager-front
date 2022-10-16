import { BasePagina } from "../utils/BasePagina";

export const Inicio = () => {
  return (
    <BasePagina>
      <div className="w-full h-full grid grid-cols-1 grid-rows-3  gap-4">
        <div className="w-full h-full bg-slate-50 flex gap-4">
          <Grafico />
          <div>oi</div>
        </div>
        <h1 className="w-full h-full bg-slate-50">Oi</h1>
        <h1 className="w-full h-full bg-slate-50">Oi</h1>
      </div>
    </BasePagina>
  );
};

const Grafico = () => {
  return (
    <div className="w-96 h-full bg-white rounded-sm shadow-sm flex">
      <div className="w-full h-full flex flex-col justify-center p-4">
        <h1 className="text-4xl font-bold">32</h1>
        <small className="uppercase">Vendas</small>
      </div>
      {/* <div className="w-1/2 h-full bg-black"></div> */}
    </div>
  );
};
