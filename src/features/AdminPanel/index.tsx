import React, { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./app.tsx";

import type { IdeaPage } from "./types/IdeaPage.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const authDomain = import.meta.env.PUBLIC_AUTH0_DOMAIN;
const authClientId = import.meta.env.PUBLIC_AUTH0_CLIENT_ID;

const queryClient = new QueryClient();

interface Props {
  pages: IdeaPage[];
}

const AdminPanel: React.FC<Props> = ({ pages }: Props) => {
  return (
    <StrictMode>
      <Auth0Provider
        domain={authDomain}
        clientId={authClientId}
        authorizationParams={{
          redirect_uri: window.location.href,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <App pages={pages} />
        </QueryClientProvider>
      </Auth0Provider>
    </StrictMode>
  );
};

export default AdminPanel;
