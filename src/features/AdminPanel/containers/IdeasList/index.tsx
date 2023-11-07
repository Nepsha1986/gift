import React, { useEffect, useState } from "react";
import type { IdeaDto } from "@services/ideasService.ts";
import IdeasService from "@services/ideasService.ts";
import Button from "@reactComponents/Button";
import type { IdeaPage } from "../../types/IdeaPage.ts";

interface Props {
  availablePages: IdeaPage[];
}

const IdeasList: React.FC<Props> = ({ availablePages }) => {
  const [ideas, setIdeas] = useState<IdeaDto[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getIdeas = async () => {
      const items = await IdeasService.getAll();
      setIdeas(items);
    };
    getIdeas().catch((e) => {
      setError(true);
    });
  }, []);

  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <h1>Ideas list</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reference ID</th>
            <th>Locale</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ideas.map((i) => (
            <tr>
              <td>{i.name}</td>
              <td>{i._ref_id}</td>
              <td>{i.locale}</td>
              <td>
                <Button text="edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IdeasList;
