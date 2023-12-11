import { useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { FaRegHeart } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import Search from "./Search";
import { RootState } from "../redux/store";
import { removeFromFavorites } from "../redux/actions";
import { addToFavorites } from "../redux/actions";

const ListBestSellersPage = () => {
  const allBooks = useSelector((state: RootState) => state.book.books);
  const favorites = useSelector((state: RootState) => state.book.favorites);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [heartFilledMap, setHeartFilledMap] = useState<Record<string, boolean>>({});

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const isBookInFavorites = (bookId: string): boolean => {
    return favorites.some(favBook => favBook.primary_isbn10 === bookId);
  };

  const handleHeartClick = (bookId: string) => {
    const isFavorite = isBookInFavorites(bookId);

    if (isFavorite) {
      dispatch(removeFromFavorites(bookId));
    } else {
      const bookToAdd = allBooks.find(book => book.primary_isbn10 === bookId);
      if (bookToAdd) {
        dispatch(addToFavorites(bookToAdd));
      }
    }

    setHeartFilledMap(prevMap => ({
      ...prevMap,
      [bookId]: !isFavorite
    }));
  };

  const filteredBooks = allBooks.filter(
    book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.contributor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="vh-100 ">
          <Sidebar />
          <Col className="homepage-bg d-flex flex-column align-items-center">
            <div>
              <div>
                <h4 className="mt-5">New York Times BestSellers</h4>
                <Search onSearch={handleSearch} />
              </div>
              <ListGroup>
                {filteredBooks.map(book => (
                  <ListGroup.Item
                    key={book.primary_isbn10}
                    className="d-flex justify-content-between flex-column flex-md-row mb-3">
                    <div className="d-flex align-items-center me-2">
                      <BiBookOpen className="border-BiBookOpen me-2 fs-3" />
                      <div className="me-1 text-uppercase">{book.title}</div>
                      <div className="text-secondary">{book.contributor}</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="me-5">{book.rank}</div>
                      <div className="me-5">{book.price} GBP</div>
                      <Button
                        className="border-0 p-0 bg-transparent"
                        onClick={() => handleHeartClick(book.primary_isbn10)}>
                        <FaRegHeart
                          className={`border-BiBookOpen fs-3 ${
                            heartFilledMap[book.primary_isbn10] ? "text-danger" : ""
                          }`}
                        />
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

export default ListBestSellersPage;
