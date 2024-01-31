import React, { useState } from "react";
import { Button, Dialog } from "@src/common";
import PageFinder from "./components/PageFinder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const hasSearch = import.meta.env.MODE === "production";

const Search: React.FC = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Dialog
        heading="Search"
        size="medium"
        open={opened}
        onClickClose={() => {
          setOpened(false);
        }}
      >
        <p>Type your search term</p>
        {hasSearch ? (
          <PageFinder />
        ) : (
          <p>
            {'Available only for production, or run "npm run dev:pagefind"'}
          </p>
        )}
      </Dialog>

      <Button
        color="transparent"
        iconOnly
        onClick={() => {
          setOpened(true);
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </>
  );
};

export default Search;
