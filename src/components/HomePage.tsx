import { Button, Col, Container, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Col xs="auto" className="sidebar-bg d-flex align-items-center">
            <div className="sidebar-size d-flex flex-column align-items-center">
              <Button variant="outline" className="mb-4">
                <BsBarChart className="icon-size" />
              </Button>
              <Button variant="outline" className="mb-4">
                <FaRegHeart className="icon-size " />
              </Button>
              <Button variant="outline" className="mb-4">
                <FiSettings className="icon-size" />
              </Button>
            </div>
          </Col>
          <Col className="homepage-bg">1</Col>
        </Row>
      </Container>
    </>
  );
};
export default HomePage;
