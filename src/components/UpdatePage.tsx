import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { Link, useParams } from "react-router-dom";
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
          <Col className="homepage-bg mt-5 d-flex flex-column align-items-center">
            <div className="position-relative text-center mx-auto mt-5 ">
              {bookToUpdate && (
                <>
                  <Image
                    src={booksPicture}
                    alt="books"
                    style={{ width: "900px", height: "300px" }}
                    className="img-fluid"
                  />
                  <div
                    className="position-absolute text-white"
                    style={{
                      top: "30%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      width: "100%"
                    }}>
                    <h2>{bookToUpdate.title}</h2>
                    <p>{bookToUpdate.contributor}</p>
                  </div>
                  <div className="mt-5 ">
                    <h4 className="d-flex justify-content-start">Edit</h4>
                    <Row
                      className="mt-3 ms-0 
                    d-flex justify-content-start">
                      <Col xs={2} className="custom-bg text-white p-2">
                        Cost
                      </Col>
                      <Col xs={2} className="g-0 ">
                        <input type="text" className="border-0 p-2" defaultValue={bookToUpdate.price}></input>
                      </Col>
                    </Row>
                    <Row className="mt-3 ms-0">
                      <Col xs={2} className="custom-bg text-white p-2">
                        Rating
                      </Col>
                      <Col xs={2} className="g-0">
                        <input type="text" className="border-0 p-2" defaultValue={bookToUpdate.rank}></input>
                      </Col>
                    </Row>
                    <Button
                      className="d-flex justify-content-center mt-4 w-25 "
                      style={{ borderRadius: "20px 20px 20px 20px" }}>
                      UPDATE
                    </Button>
                    <div className="d-flex justify-content-start mt-4">
                      Return to:
                      <Link className="border-BiBookOpen" to={"/favourites"}>
                        Favourites
                      </Link>
                      👈🏻
                    </div>
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
