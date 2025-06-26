import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import properties from '../data/properties';
import './Home.css';

// Imágenes del slider principal
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';

// Imágenes de colecciones destacadas
import arteImg from './img/arte.jpg';
import comicsImg from './img/comics.jpg';
import vehiculoImg from './img/vehiculo.jpg';

// Imágenes de testimonios
import testimonio1 from './img/testimonio1.jpg';
import testimonio2 from './img/testimonio2.jpg';
import testimonio3 from './img/testimonio3.jpg';

const images = [img1, img2, img3];

const testimonios = [
  {
    name: 'Marcos Perez',
    feedback: 'Gané una pintura clásica a un precio increíble. ¡Bidplace es mi nuevo lugar favorito para coleccionar arte!',
    image: testimonio1,
    item: "Pintura Renacentista",
    price: "$2,400"
  },
  {
    name: 'Aquita Sato',
    feedback: 'Subasté una figura de acción antigua y se vendió en menos de 24 horas. ¡Gran alcance!',
    image: testimonio2,
    item: "Figura de Acción Vintage",
    price: "$1,200"
  },
  {
    name: 'Steve',
    feedback: 'Nunca imaginé conseguir una reliquia de colección tan única. ¡Estoy fascinado con la plataforma!',
    image: testimonio3,
    item: "Reliquia Histórica",
    price: "$3,800"
  },
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Container className="d-flex align-items-center justify-content-center flex-wrap hero-content">
          <div className="hero-text text-white">
            <h1 className="static-title">¡Bienvenido a Bidplace!</h1>
            <p className="static-subtitle">La plataforma de subastas donde encuentras piezas únicas y oportunidades excepcionales</p>
            <div className="d-flex gap-3">
              <Button as={Link} to="/subastas" className="cta-button">Explorar Subastas</Button>
              <Button as={Link} to="/registro" variant="outline-light" className="px-4">Registrarse</Button>
            </div>
          </div>
          <div className="image-slider-floating right">
            <img
              src={images[currentImage]}
              alt="Item destacado en subasta"
              className={`slider-image-floating ${fade ? 'fade-in' : 'fade-out'} floating`}
            />
          </div>
        </Container>
      </div>

      <Container className="my-5">
        {/* Colecciones destacadas */}
        <Row className="section-spacing2">
          <Col className="text-center">
            <h2 className="section-title">Colecciones destacadas</h2>
            <Row>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card className="property-card h-100">
                  <Card.Img variant="top" src={arteImg} className="collection-image" />
                  <Card.Body>
                    <Card.Title>Arte y antigüedades</Card.Title>
                    <Card.Text>
                      Memorabilia exclusiva y piezas únicas que despiertan la nostalgia de generaciones enteras.
                    </Card.Text>
                    <Button variant="outline-primary" as={Link} to="/categoria/arte">Ver subastas</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card className="property-card h-100">
                  <Card.Img variant="top" src={comicsImg} className="collection-image" />
                  <Card.Body>
                    <Card.Title>Coleccionables</Card.Title>
                    <Card.Text>
                      Piezas que no se encuentran fácilmente en el mercado. Comic vintage, objetos históricos y autógrafos de autores célebres.
                    </Card.Text>
                    <Button variant="outline-primary" as={Link} to="/categoria/coleccionables">Ver subastas</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={4} className="mb-4">
                <Card className="property-card h-100">
                  <Card.Img variant="top" src={vehiculoImg} className="collection-image" />
                  <Card.Body>
                    <Card.Title>Vehículos</Card.Title>
                    <Card.Text>
                      Desde autos clásicos que evocan nostalgia hasta modelos de lujo y ediciones limitadas que definen elegancia.
                    </Card.Text>
                    <Button variant="outline-primary" as={Link} to="/categoria/vehiculos">Ver subastas</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Testimonios / Ganadores */}
        <Row className="section-spacing">
          <Col className="text-center">
            <h2 className="section-title">Ganadores Recientes</h2>
            <Carousel indicators={false} className="px-5">
              {testimonios.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <Card className="testimonial-card text-center p-4 mx-auto" style={{ maxWidth: '600px' }}>
                    <Card.Body>
                      <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                      <Card.Text className="fs-5 fst-italic mb-4">
                        "{testimonial.feedback}"
                      </Card.Text>
                      <footer className="d-flex justify-content-center gap-4">
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <small className="text-muted">Ganador de subasta</small>
                        </div>
                        <div className="vr"></div>
                        <div>
                          <h6 className="mb-0">{testimonial.item}</h6>
                          <small className="text-success fw-bold">{testimonial.price}</small>
                        </div>
                      </footer>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        {/* ¿Por qué Bidplace? */}
        <Row className="section-spacing">
          <Col className="text-center">
            <h2 className="section-title">¿Por qué Bidplace?</h2>
            <Row className="g-4">
              <Col md={4} className="mb-4">
                <Card className="feature-card text-center h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6e48aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <Card.Title>Comunidad en crecimiento</Card.Title>
                    <Card.Text>
                      Oportunidades de colaboración, acceso a nuevas ideas y tendencias, y la posibilidad de destacarte en un entorno dinámico.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="feature-card text-center h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6e48aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <Card.Title>Oportunidad para subastar mejor</Card.Title>
                    <Card.Text>
                      Permite acceder a una audiencia amplia y diversa. Lo que incrementa las posibilidades de venta y obtención de mejores precios.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="feature-card text-center h-100">
                  <Card.Body>
                    <div className="mb-3">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6e48aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <Card.Title>Siempre notificado</Card.Title>
                    <Card.Text>
                      Ofrecemos ventaja competitiva con notificaciones en tiempo real, permitiéndote tomar decisiones rápidas y no perder oportunidades.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;