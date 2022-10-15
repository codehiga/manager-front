import { PropsWithChildren } from "react";

export const BasePagina = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-full overflow-auto">{children}</div>;
};
