import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BiBookOpen } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { removeFromFavorites } from "../redux/actions";

const FavouritesPage = () => {
  const favorites = useSelector((state: RootState) => state.book.favorites);
  const dispatch = useDispatch();

  const handleHeartClick = (bookId: string) => {
    dispatch(removeFromFavorites(bookId));
  };
  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col className="mt-5 d-flex flex-column align-items-center">
            <div>
              <h4 className="mt-5">Favourites</h4>
              <ListGroup className="mt-5">
                {favorites.map(book => (
                  <ListGroup.Item
                    key={book.primary_isbn10}
                    className="d-flex justify-content-between flex-column flex-md-row mb-3">
                    <div className="d-flex">
                      <BiBookOpen className="border-BiBookOpen me-2 fs-3" />

                      <p className="me-1 text-uppercase">{book.author}</p>
                      <p className="text-secondary me-4">{book.contributor}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="me-5">{book.price} GBP</p>
                      <p className="me-5 d-none d-lg-block">{book.rank}</p>
                      <Button className="border-0 bg-transparent text-secondary">Edit</Button>
                      <Button className="border-0 bg-transparent text-secondary">Delete</Button>
                      <Button className="border-0 bg-transparent" onClick={() => handleHeartClick(book.primary_isbn10)}>
                        <FaRegHeart className="border-BiBookOpen fs-3" />
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FavouritesPage;
