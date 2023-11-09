import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Book {
  book_image: string;
}

const apiKey = "iNWy3urIqs8tcFxmoTOinObGaHcuzvOq";
const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/full-overview.json";

const HomePage = () => {
  const [randomImages, setRandomImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?api-key=${apiKey}`);
        const data = await response.json();
        const books: Book[] = data.results.lists[0].books;

        // Prendere 3 immagini casuali
        const randomIndices = Array.from({ length: 3 }, () => Math.floor(Math.random() * books.length));
        const randomBooks = randomIndices.map(index => books[index]);

        // Prendere i link delle immagini
        const images = randomBooks.map(book => book.book_image);

        // Aggiungere le immagini
        setRandomImages(images);
      } catch (error) {
        console.error("Error during fetch API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // L'array vuoto significa che useEffect verrà eseguito una volta al mount

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
