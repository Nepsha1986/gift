import React from "react";

import IdeasList from "./containers/IdeasList";
import AddLocale from "./containers/AddLocaleFlow";
import type { IdeaPage } from "./types/IdeaPage.ts";

interface Props {
  pages: IdeaPage[];
}

const AdminPanel: React.FC<Props> = ({ pages }: Props) => {
  return (
    <div>
      <IdeasList availablePages={pages} />
    </div>
  );
};

export default AdminPanel;
