import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { saveBooks } from "../redux/actions";

export interface Book {
  book_image: string;
  author: string;
  contributor: string;
  price: string;
  rank: number;
}

const apiKey = "iNWy3urIqs8tcFxmoTOinObGaHcuzvOq";
const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json";

const HomePage = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?api-key=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const books: Book[] = data.results.lists[0].books;
        dispatch(saveBooks(books)); //dispatch of one action with name saveBooks with payload books

        // taking 3 random images
        const randomIndices = Array.from({ length: 3 }, () => Math.floor(Math.random() * books.length));
        const randomBooks = randomIndices.map(index => books[index]);

        // taking link of the images
        const images = randomBooks.map(book => book.book_image);

        // adding images
        setRandomImages(images);
      } catch (error) {
        console.error("Error during fetch API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <Row className="vh-100">
          <Sidebar />
          <Col className="homepage-bg d-flex justify-content-center">
            <div>
              <Search />
              <div>
                <div className="mb-4">
                  <Link to="/listBestSellers" style={{ color: "black" }}>
                    New York Times BestSellers
                  </Link>
                </div>

                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  <Row>
                    {randomImages.map((image, index) => (
                      <Col key={index} md={6} lg={4} className="mb-3">
                        <Image fluid src={image} style={{ width: "320px", height: "200px" }} />
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
              <div className="mt-5"> Favourites</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
