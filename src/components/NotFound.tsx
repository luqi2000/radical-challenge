import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404 -- Page not found</h1>
      <p>This request doesn't exist. Go back!</p>
      <Button
        variant="info"
        onClick={() => {
          navigate("/");
        }}>
        Return to the home page
      </Button>
    </>
  );
};
export default NotFound;
