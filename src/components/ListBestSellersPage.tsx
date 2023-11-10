import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { FaRegHeart } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import Search from "./Search";
import { RootState } from "../redux/store";
import { useState } from "react";

const ListBestSellersPage = () => {
  const books = useSelector((state: RootState) => state.book.books);
  const [isClicked, setIsClicked] = useState(false);

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
                  <ListGroup.Item key={index} className="d-flex justify-content-between flex-column flex-md-row mb-3">
                    <div className="d-flex">
                      <BiBookOpen className="border-BiBookOpen me-2 fs-3" />
                      <p className="me-1 text-uppercase">{book.author}</p>
                      <p className="text-secondary">{book.contributor}</p>
                    </div>
                    <div className="d-flex">
                      <p className="me-5">{book.rank}</p>
                      <p className="me-5">{book.price} GBP</p>
                      <Button className="border-0 p-0 bg-transparent" onClick={() => setIsClicked(!isClicked)}>
                        <FaRegHeart className={`border-BiBookOpen fs-3 ${isClicked ? "custom-bg" : ""}`} />
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
