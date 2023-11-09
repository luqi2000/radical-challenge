import { Button, Col } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <Col xs="auto" className="sidebar-bg d-flex align-items-center ">
        <div className="sidebar-size d-flex flex-column align-items-center">
          <Button
            variant="outline"
            className={`mb-4 ${
              (location.pathname === "/" && "bg-primary") || (location.pathname === "/listBestSellers" && "bg-primary")
            }`}
            onClick={() => {
              navigate("/listBestSellers");
            }}>
            <BsBarChart className="icon-size" />
          </Button>

          <Button
            variant="outline"
            className={`mb-4 ${location.pathname === "/favourites" && "bg-primary"}`}
            onClick={() => {
              navigate("/favourites");
            }}>
            <FaRegHeart className="icon-size " />
          </Button>
          <Button variant="outline" className="mb-4">
            <FiSettings className="icon-size" />
          </Button>
        </div>
      </Col>
    </>
  );
};
export default Sidebar;
