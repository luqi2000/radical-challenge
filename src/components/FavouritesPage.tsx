import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const FavouritesPage = () => {
  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default FavouritesPage;
