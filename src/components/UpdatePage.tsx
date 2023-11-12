import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const UpdatePage = () => {
  const { details } = useParams();
  const books = useSelector((state: RootState) => state.book.books);
  const bookToUpdate = books.find(book => book.primary_isbn10 === details);

  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col>
            {bookToUpdate && (
              <div>
                <img src={bookToUpdate.book_image} alt={bookToUpdate.title} />
                <h2>{bookToUpdate.title}</h2>
                <p>{bookToUpdate.contributor}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UpdatePage;
