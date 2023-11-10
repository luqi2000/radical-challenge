// Search.tsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FunctionComponent<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div
      className="bg-white d-flex justify-content-between align-items-center mt-5 mb-5 "
      style={{ borderRadius: "20px 20px 20px 20px" }}>
      <div>
        <BsSearch className="bg-white ms-3 me-3" />
        <input
          type="text"
          placeholder="Search book"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ border: "none", outline: "none", margin: "0", marginRight: "8px" }}
        />
      </div>
      <Button
        className="custom-bg-color-user"
        style={{ border: "none", outline: "none", borderRadius: "0 20px 20px 0" }}
        onClick={handleSearch}>
        Go
      </Button>
    </div>
  );
};

export default Search;
