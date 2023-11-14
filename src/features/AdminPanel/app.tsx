import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RelatedProducts from "./pages/RelatedProducts";
import Overview from "./pages/Overview";
import Products from "./pages/Products";

import Dashboard from "./layouts/Dashboard";

import { type IdeaPage } from "./types/IdeaPage.ts";
import ProtectedRoute from "./containers/ProtectedRoute";
interface Props {
  pages: IdeaPage[];
}

const App: React.FC<Props> = ({ pages }) => {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },

        {
          path: "/admin/related-products",
          element: <RelatedProducts availablePages={pages} />,
        },
        {
          path: "/admin/products",
          element: <Products availablePages={pages} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
