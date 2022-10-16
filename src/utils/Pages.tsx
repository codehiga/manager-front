import { BagSimple, HouseSimple, Pen, Person } from "phosphor-react";
import { Cadastro } from "../pages/Cadastro";
import { Clientes } from "../pages/Clientes";
import { Inicio } from "../pages/Inicio";
import { Vendas } from "../pages/Vendas";

export const pages = [
  {
    titulo: "Ínicio",
    url: "/",
    icone: <HouseSimple weight="fill" size={24} />,
    componente: <Inicio />,
  },
  {
    titulo: "Vendas",
    url: "/vendas",
    icone: <BagSimple weight="fill" size={24} />,
    componente: <Vendas />,
  },
  {
    titulo: "Clientes",
    url: "/clientes",
    icone: <Person weight="fill" size={24} />,
    componente: <Clientes />,
  },
  {
    titulo: "Cadastro",
    url: "/cadastro",
    icone: <Pen weight="fill" size={24} />,
    componente: <Cadastro />,
  },
];
