import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Search from "./Search";

const ListBestSellersPage = () => {
  return (
    <>
      <Container fluid>
        <Row className="vh-100 ">
          <Sidebar />
          <Col className="homepage-bg d-flex flex-column align-items-center">
            <div>
              <div>
                <h4 className="mt-5">New York Times BestSellers</h4>
                <Search />
              </div>
              <ListGroup>
                <ListGroup.Item>Cras justo odioooooo oooooooo oooooooooo ooooo vhj hbhj jhbhj jhbv</ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ListBestSellersPage;
