import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./Services.scss";

const Services = () => {
  return (
    <div className="service">
      <Container>
        <h3 className="service__title">Biz bilan nimalarni o'rganasiz</h3>
        <Row>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Qo'chqorova Lyubov</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/0QYJ7N4QRWQ"
                title="Ovqatlanishning ayrim muammolari"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Ovqatlanishdagi ayrim muammolar</div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/hBRGa6glQzo"
                title="Oqsillar va yog'lar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Oqsillar va yog'lar</div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/ZHDp4PvfEm4"
                title="Ovqatlanish xulq atvori"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Ovqatlanish xulq atvori</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/rjNT9T3AxiM"
                title="ovqatlanish meyrlari"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">ovqatlanish meyrlari</div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/i8nc9KCOD4c"
                title="Plastik va energetik metabolizm  Uglevodlar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">
                Plastik va energetik metabolizm Uglevodlar
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/dyVT8L9HPKI"
                title="Vitaminlar va antooksidantlar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Vitaminlar va antooksidantlar</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/URdt6_-n8y4"
                title="ovqatlanish nazariyasi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">ovqatlanish nazariyasi</div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/_Gsh2-Q03mw"
                title="Ovqat hazm qilishning funksiyalari"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Ovqat hazm qilishning funksiyalari</div>
            </div>
          </Col>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/T97mqJywq0I"
                title="Hazmning tiplari va turlari"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">Hazmning tiplari va turlari</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="videos">
              <div className="vdText tittleVd">Diyora Azimova</div>
              <iframe
                width="100%"
                height="200px%"
                src="https://www.youtube.com/embed/kIQgfv0NqhE"
                title="Hazm tizimining makro va mikro strukturasi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="vdText">
                Hazm tizimining makro va mikro strukturasi
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
