import React, { useEffect, useState } from "react";
import ideasService, { type IdeaDto } from "@services/ideasService.ts";

interface Props {
  ideaName: string;
}

const ProductTable: React.FC<Props> = ({ ideaName }) => {
  const [idea, setIdea] = useState<IdeaDto>({} as IdeaDto);
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
      <h2>Happy gift-hunting!</h2>
      <p>
        {
          "Within the list, you'll find a handpicked assortment of gift ideas, each complete with a name, description, and product links. This provides you with a convenient way to browse and discover the ideal gift for any occasion. Enjoy your gift-hunting experience!"
        }
      </p>

      {Object.keys(idea).includes("products") ? (
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
      ) : (
        <p>
          Sorry, Currently there are no products in the list, we are working on
          this feature....
        </p>
      )}
    </div>
  );
};

export default ProductTable;
