import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BiBookOpen } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

const FavouritesPage = () => {
  const favorites = useSelector((state: RootState) => state.book.favorites);
  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col className="mt-5">
            <ListGroup>
              {favorites.map(book => (
                <ListGroup.Item
                  key={book.primary_isbn10}
                  className="d-flex justify-content-between flex-column flex-md-row mb-3">
                  <div className="d-flex">
                    <BiBookOpen className="border-BiBookOpen me-2 fs-3" />

                    <p className="me-1 text-uppercase">{book.author}</p>
                    <p className="text-secondary">{book.contributor}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="me-5">{book.price} GBP</p>
                    <p className="me-5">{book.rank}</p>
                    <Button className="border-0 bg-transparent text-secondary">Edit</Button>
                    <Button className="border-0 bg-transparent text-secondary ">Delete</Button>
                    <Button className="border-0 bg-transparent">
                      <FaRegHeart className="border-BiBookOpen fs-3 " />
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FavouritesPage;
