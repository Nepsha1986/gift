import React, { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

import Input from "src/components/react/Input";

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const [val, setVal] = useState(value);
  const debouncedValue = useDebounce<string>(val, 600);

  useEffect(() => {
    if (debouncedValue !== value) onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input
      name="search"
      value={val}
      label="Search by title | refId"
      placeholder="Search"
      onChange={setVal}
    />
  );
};

export default Search;
