import "./news.scss";
import Opening from "../../assets/imgs/opening.jpg";
import Teacher from "../../assets/imgs/teacher.jpg";
import Innonews from "../../assets/imgs/innonews.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { Col, Container, Row } from "reactstrap";

function News() {
  return (
    <>
      <div className="more-swip">
        <Container>
          <Row>
            <Col md="6">
              <div className="open-img">
                <img className="img-fluid azimova" src={Opening} />
              </div>
              <div className="box">
                <div className="box-text">Shukurova Diyora Azimovna</div>
                <div className="dates">
                  <i className="fa fa-calendar" />
                  tug'ilgan yili: 17.10.1995-yil
                </div>
                <div className="box-commit">
                  <p>
                    Tug‘ilgan joyi: Samarqand viloyati, Ishtixon tuman Millati:
                    O‘zbek Ma'lumoti: Tugallangan oliy Tamomlagan o'liy o'quv
                    yurti nomi: Toshkent davlat pedagogika universiteti
                    Mutaxassisligi: Biolog (fiziolog) Ilmiy darajasi: yo‘q Ilmiy
                    unvoni: yo‘q Partiyaviyligi: yo‘q
                  </p>
                  <p>
                    MEHNAT FAOLIYATI: 2011 - 2014 yy. Jizzax tibbiyot kolleji
                    2014 - 2017 yy. Jizzax viloyatida joylashgan "sifatli talim"
                    o'quv markazi o'qituvchisi 2016 - 2020 yy. Toshkent davlat
                    pedagogika Universiteti talabasi 2020 - 2021 yy. Sirg'ali
                    tuman 68-maktab biologiya fan o'qituvchisi 2020 - 2022 yy.
                    Mirzo Ulugbek nomidagi O'ZMU magestranti 2022 yildan
                    hozirgacha Mirzo Ulugbek nomidagi O'ZMU o'qituvchisi
                    E-mail:shukurova_d@nuu.uz
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="open-img">
                <img className="img-fluid quchqorova azimova" src={Innonews} />
              </div>
              <div className="box">
                <div className="box-text">QO'CHQOROVA LYUBOV SALIJONOVNA</div>
                <div className="dates">
                  <i className="fa fa-calendar" />
                  Tug'ilgan yili: 1954-yil 1-fevral
                </div>
                <div className="box-commit">
                  <p>
                    MEHNAT FAOLIYATI: 1971-1975 yy.Аndijon davlat pedagogika
                    instituti talabasi 1976-1985yy.Аndijon davlat pedagogika
                    instituti oʼqituvchisi 1985-1988 yy.OʼzR FА Fiziologiya va
                    biofizika instituti aspiranti 1988-1997 yy.Аndijon davlat
                    universitetida katta oʼqituvchisi, dotsenti 1997-2000
                    yy.OʼzR FА Zoologiya instituti doktoranti 2000-2006 yy. OʼzR
                    FА Fiziologiya va biofizika instituti katta ilmiy xodimi
                    2006-2011 yy.OʼzMU Odam va hayvonlar fiziologiyasi kafedrasi
                    professori 2011-2013 yy.OʼzMU Odam va hayvonlarfiziologisi
                    kafedrasining mudiri 2014-2015 yy.OʼzMU Fiziologiya va
                    biofizika kafedrasining professori. 2015-2016 yy.OʼzMu
                    Fiziologiya va neyrobiologiya kafedrasining professori
                    2017-2018 yy.OʼzMU fiziologiya va biofizika kafedrasining
                    professori 2018- h.v.OʼzMU Odam va hayvonlar fiziologiyasi
                    kafedrasining professori
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <div className="open-img">
                <img className="img-fluid azimova" src={Teacher} />
              </div>
              <div className="box">
                <div className="box-text">Karimova Irodaxon Ibrohimjonovna</div>
                <div className="dates">
                  <i className="fa fa-calendar" />
                  tug'ilgan yili: 14.12.1979-yil
                </div>
                <div className="box-commit">
                  <p>
                    Tug‘ilgan joyi: Andijon viloyati, Marhamat tumani. tuman
                    Millati: O‘zbek Ma'lumoti: Tugallangan oliy Tamomlagan o'liy
                    o'quv yurti nomi: Toshkent davlat pedagogika universiteti
                    Mutaxassisligi: Biolog (fiziolog)
                  </p>
                  <p>
                    1996-2000 yy. - Andijon Davlat universiteti talabasi
                    2000-2002 yy. - O‘zbekiston Milliy universiteti magistranti
                    2003-2010 yy. - O‘zbekiston Respublikasi Fanlar Akademiyasi
                    Fiziologiya va biofizika instituti aspiranti 2010-2011 yy. -
                    O‘zbekiston Milliy universiteti Odam va hayvonlar
                    fiziologiyasi kafedrasi o‘qituvchisi 2012-2014 yy. -
                    O‘zbekiston Milliy universiteti Odam va hayvonlar
                    fiziologiyasi kafedrasi katta o‘qituvchisi 2014-2015 yy. -
                    O‘zbekiston Milliy universiteti Fiziologiya va biofizika
                    kafedrasi katta o‘qituvchisi 2015-2017 yy. - O‘zbekiston
                    Milliy universiteti Fiziologiya va neyrobiologiya kafedrasi
                    katta o‘qituvchisi 2017-2018 yy. - O‘zbekiston Milliy
                    universiteti Odam va hayvonlar fiziologiyasi kafedrasi katta
                    o‘qituvchisi 2019 y-2022
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default News;
