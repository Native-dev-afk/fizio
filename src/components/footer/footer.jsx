import React from "react";
import "../footer/Footer.scss";

const Footer = () => {
  return (
    <div className="foot">
      <div className="foot__items container ">
        <div className="foot__items__menu">
          <ul className="foot__items__menu__contact">
            <h4>Muloqot uchun</h4>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <img src="" alt="" /> O'zbekiston Milliy Universiteti
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <img src="" alt="" /> +99871 *** ** **
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <img src="" alt="" /> shukurova_d@nuu.uz
            </li>
          </ul>
          <ul className="foot__items__menu__contact link">
            <h4>Foydali havolalar</h4>
            <li>
              <a href="https://www.youtube.com/@DiyoraAzimovna">
                Ovqatlanish va Metobalizm
              </a>
            </li>
            <li>
              <a href="https://nuu.uz/">O'zbekiston Milliy Universiteti</a>
            </li>
          </ul>
        </div>
        <div className="foot__items__bottom">
          <p>
            © <a href="#">Ovqatlanish va Metobalizm </a>, All Right Reserved.
          </p>
          {/* <p></p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
