import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import RelatedProducts from "./containers/RelatedProducts";
import Dashboard from "./layouts/Dashboard";

import { type IdeaPage } from "./types/IdeaPage.ts";
interface Props {
  pages: IdeaPage[];
}

const App: React.FC<Props> = ({ pages }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) void loginWithRedirect();
  }, [isAuthenticated, isLoading]);

  if (isLoading || !isAuthenticated) return null;

  return (
    <Dashboard>
      <RelatedProducts availablePages={pages} />
    </Dashboard>
  );
};

export default App;
