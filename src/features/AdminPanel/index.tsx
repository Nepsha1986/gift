import React from "react";

import IdeasList from "./containers/IdeasList";
import AddIdeaFlow from "./containers/AddIdeaFlow";
import type { IdeaPage } from "./types/IdeaPage.ts";

interface Props {
  pages: IdeaPage[];
}

const AdminPanel: React.FC<Props> = ({ pages }: Props) => {
  return (
    <div>
      <IdeasList availablePages={pages} />
      <AddIdeaFlow availablePages={pages} />
    </div>
  );
};

export default AdminPanel;
