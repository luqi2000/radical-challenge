import { Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div
      className="bg-white d-flex justify-content-between align-items-center mt-5 mb-5 "
      style={{ borderRadius: "20px 20px 20px 20px" }}>
      <div>
        <BsSearch className="bg-white ms-3 me-3" />
        <input
          type="text"
          placeholder="What books?"
          style={{ border: "none", outline: "none", margin: "0", marginRight: "8px" }}
        />
      </div>

      <Button
        className="custom-bg-color-user"
        style={{ border: "none", outline: "none", borderRadius: "0 20px 20px 0" }}>
        Go
      </Button>
    </div>
  );
};

export default Search;
