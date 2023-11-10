import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { FaRegHeart } from "react-icons/fa";
import Search from "./Search";
import { RootState } from "../redux/store";

const ListBestSellersPage = () => {
  const books = useSelector((state: RootState) => state.book.books);

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="vh-100 ">
          <Sidebar />
          <Col className="homepage-bg d-flex flex-column align-items-center">
            <div>
              <div>
                <h4 className="mt-5">New York Times BestSellers</h4>
                <Search />
              </div>
              <ListGroup>
                {books.map((book, index) => (
                  <ListGroup.Item key={index}>
                    <div className="d-flex">
                      <p>{book.author}</p>
                      <p> {book.contributor}</p>
                      <p>{book.price}</p>
                      <p>{book.rank}</p>
                      <Button>
                        {" "}
                        <FaRegHeart />
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
