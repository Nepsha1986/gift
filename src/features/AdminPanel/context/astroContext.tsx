import { createContext, useContext } from "react";
import { type IdeaPage } from "../types/IdeaPage.ts";

export interface AstroContextProps {
  ideaPages: IdeaPage[];
}

export const AstroContext = createContext<Partial<AstroContextProps>>({});
export const useAstroContext = (): Partial<AstroContextProps> => {
  const context = useContext(AstroContext);
  if (!context) {
    throw new Error(
      "useAstroContext must be used within a AstroContextProvider",
    );
  }
  return context;
};
