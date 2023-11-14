import React, { StrictMode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./app.tsx";

import type { IdeaPage } from "./types/IdeaPage.ts";

const authDomain = import.meta.env.PUBLIC_AUTH0_DOMAIN;
const authClientId = import.meta.env.PUBLIC_AUTH0_CLIENT_ID;

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
        <App pages={pages} />
      </Auth0Provider>
    </StrictMode>
  );
};

export default AdminPanel;
