import React from "react";

import RelatedProducts from "./containers/RelatedProducts";
import AddLocale from "./containers/AddLocaleFlow";
import type { IdeaPage } from "./types/IdeaPage.ts";

interface Props {
  pages: IdeaPage[];
}

const AdminPanel: React.FC<Props> = ({ pages }: Props) => {
  return (
    <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <RelatedProducts availablePages={pages} />
    </div>
  );
};

export default AdminPanel;
