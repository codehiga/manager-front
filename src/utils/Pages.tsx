import { BagSimple, HouseSimple, Pen, Person } from "phosphor-react";
import { Cadastro } from "../pages/Cadastro";
import { Clientes } from "../pages/Clientes";
import { Embarques } from "../pages/Embarques";
import { Inicio } from "../pages/Inicio";

export const pages = [
  {
    titulo: "Ínicio",
    url: "/",
    icone: <HouseSimple weight="fill" size={24} />,
    componente: <Inicio />,
  },
  {
    titulo: "Cadastro",
    url: "/cadastro",
    icone: <Pen weight="fill" size={24} />,
    componente: <Cadastro />,
  },
  {
    titulo: "Clientes",
    url: "/clientes",
    icone: <Person weight="fill" size={24} />,
    componente: <Clientes />,
  },
  {
    titulo: "Embarques",
    url: "/embarques",
    icone: <BagSimple weight="fill" size={24} />,
    componente: <Embarques />,
  },
];
