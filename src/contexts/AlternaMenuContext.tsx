import { createContext, PropsWithChildren, useState } from "react";

interface IAlternaMenu {
  ativo: boolean;
  alternaMenu: () => void;
}

export const AlternaMenuContext = createContext<IAlternaMenu>({
  ativo: true,
  alternaMenu: () => {},
});

export const AlternaMenuProvider = ({ children }: PropsWithChildren) => {
  const [ativo, setAtivo] = useState<boolean>(true);

  function alternaMenu() {
    if (ativo == true) {
      setAtivo(false);
    } else {
      setAtivo(true);
    }
  }

  return (
    <AlternaMenuContext.Provider value={{ ativo, alternaMenu }}>
      {children}
    </AlternaMenuContext.Provider>
  );
};
