import { createContext, useContext } from "react";
import type { SupportedLanguages } from "@i18n/ui.ts";

export interface AstroContextProps {
  refId: string;
  lang: SupportedLanguages;
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
