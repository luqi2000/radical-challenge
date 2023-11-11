import { Col, Container, ListGroup, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

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
                <ListGroup.Item key={book.primary_isbn10}>
                  {/* Display book details as needed */}
                  {book.author} - {book.contributor}
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
