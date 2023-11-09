import { Col, Container, Image, Row } from "react-bootstrap";
import UserPicture from "../assets/luqmanPicture.jpg";

const MyNavbar = () => {
  return (
    <>
      <Container fluid className="positionNavbar">
        <Row>
          <Col xs="auto" className="custom-bg-color-user d-flex justify-content-center align-items-center">
            <Image
              src={UserPicture}
              className="user-image "
              roundedCircle
              alt="User"
              style={{ width: "40px", height: "40px" }}
            />
          </Col>
          <Col className="custom-taller-col d-flex align-items-center ps-5">
            <span className="font-weight-bold fs-4 ">RAD</span>
            <span className="font-weight-bold fs-4 text-danger">ICAL</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MyNavbar;
