import { useContext } from "react";
import { AlternaMenuContext } from "../contexts/AlternaMenuContext";

export const useAlternaMenu = () => useContext(AlternaMenuContext);
