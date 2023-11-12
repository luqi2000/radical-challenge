import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import booksPicture from "../assets/booksPicture.webp";

const UpdatePage = () => {
  const { details } = useParams();
  const books = useSelector((state: RootState) => state.book.books);
  const bookToUpdate = books.find(book => book.primary_isbn10 === details);

  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col className="mt-5">
            <div className="position-relative text-center mx-auto mt-5 ">
              {bookToUpdate && (
                <>
                  <Image
                    src={booksPicture}
                    alt="books"
                    style={{ width: "900px", height: "300px" }}
                    className="img-fluid"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle text-white">
                    <h2>{bookToUpdate.title}</h2>
                    <p>{bookToUpdate.contributor}</p>
                  </div>
                  <div>
                    <h4>Edit</h4>
                    <Row>
                      <Col>Cost</Col>
                      <Col>{bookToUpdate?.price}</Col>
                    </Row>
                    <Row>
                      <Col className="">Rating</Col>
                      <Col className="">{bookToUpdate.rank}</Col>
                    </Row>
                    <Button style={{ borderRadius: "20px 20px 20px 20px" }}>UPDATE</Button>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default UpdatePage;
