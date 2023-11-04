import React, { useEffect, useState } from "react";
import ideasService, { type IdeaDto } from "@services/ideasService.ts";

interface Props {
  ideaName: string;
}

const ProductTable: React.FC<Props> = ({ ideaName }) => {
  const [idea, setIdea] = useState<IdeaDto>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    ideasService
      .get(ideaName)
      .then((res) => {
        setIdea(res);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) return <div>Error! Please try again later.</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {/* @ts-expect-error resolves es-lint conflict */}
      {Object.keys(idea).includes("products") ? (
        <div>
          <h2>Happy gift-hunting!</h2>
          <p>
            {
              "Within the list, you'll find a handpicked assortment of gift ideas, each complete with a name, description, and product links. This provides you with a convenient way to browse and discover the ideal gift for any occasion. Enjoy your gift-hunting experience!"
            }
          </p>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {idea.products.map((item, index) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.link}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>
          We are sorry, but currently there are no products in the list. We are
          working on adding this feature, and it will be available soon.
        </p>
      )}
    </div>
  );
};

export default ProductTable;
