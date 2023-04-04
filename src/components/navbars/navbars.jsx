import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Innologo from "../../assets/imgs/innologo.png";
import "./navbars.scss";
import Bars from "../../assets/imgs/menubars.png";
import Close from "../../assets/imgs/close.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useLocation } from "react";

function Navbars() {
  const navigate = useNavigate();
  const [isOpenNav, setIsOpenNav] = useState(false)
  const showNavbar = () => {
    setIsOpenNav(true)
    console.log("xaxaxaxaxax");
  };
  const hideNavbar = () => {
    setIsOpenNav(false)
    console.log("xaxaxaxaxax");
  };
  // const { pathname } = useLocation()
  useEffect(() => {
    hideNavbar()
  }, [navigate])
  return (
    <>
      <nav className={`navbar navbar-expand-md ${isOpenNav && 'fitBg'}`}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
          className="images"
          src={Innologo}
        />
        {/* <div className={`${isOpenNav && 'fitBg'}`}></div> */}
        {!isOpenNav ? <img className="barss" src={Bars} onClick={showNavbar} /> : <img className="barss" src={Close} onClick={hideNavbar} />}
        {!isOpenNav ? <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Bosh Sahifa
            </Link>
          </li>
          <li className="navItem navbar-item">
            <div className="dropdown">
              <a
                className="btn btn-primary dropdown-toggle"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Testlar
              </a>
              <ul aria-labelledby="dropdownMenuButton1" className="dropdown-menu">
                <li>
                  <Link className="dropdown-item mavzular " to="/test1">
                    1-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test2">
                    2-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test3">
                    3-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test4">
                    4-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test5">
                    5-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test6">
                    6-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test7">
                    7-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test8">
                    8-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test9">
                    9-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test10">
                    10-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/test1">
                    11-bob
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="navItem navbar-item">
            <div className="dropdown">
              <a
                className="btn btn-primary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                mavzular
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item mavzular " to="/mavzular">
                    1-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular2">
                    2-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular3">
                    3-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular4">
                    4-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular5">
                    5-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular6">
                    6-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular7">
                    7-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular8">
                    8-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular9">
                    9-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular10">
                    10-bob
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item mavzular" to="/mavzular11">
                    11-bob
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              videodarslar
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/atamalar" className="navbar-link">
              atamalar
            </Link>
          </li>
          <li className="navbar-item none">
            <Link to="/news" className="navbar-link">
              mualliflar
            </Link>
          </li>
        </ul> :
          <div className="d-flex flex-column align-items-center justify-content-center mobile-nav">
            <div className="navbar-item">
              <Link to="/" className="navbar-link">
                Bosh Sahifa
              </Link>
            </div>
            <div className="navItem navbar-item">
              <div className="dropdown">
                <a
                  className="btn btn-primary dropdown-toggle"
                  href="#"
                  id="dropdownMenuButton1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Testlar
                </a>
                <ul aria-labelledby="dropdownMenuButton1" className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item mavzular " to="/test1">
                      1-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test2">
                      2-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test3">
                      3-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test4">
                      4-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test5">
                      5-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test6">
                      6-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test7">
                      7-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test8">
                      8-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test9">
                      9-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test10">
                      10-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/test1">
                      11-bob
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navItem navbar-item">
              <div className="dropdown">
                <a
                  className="btn btn-primary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  mavzular
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item mavzular " to="/mavzular">
                      1-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular2">
                      2-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular3">
                      3-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular4">
                      4-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular5">
                      5-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular6">
                      6-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular7">
                      7-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular8">
                      8-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular9">
                      9-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular10">
                      10-bob
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item mavzular" to="/mavzular11">
                      11-bob
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="navbar-item">
              <Link to="/services" className="navbar-link">
                videodarslar
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/atamalar" className="navbar-link">
                atamalar
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/news" className="navbar-link">
                mualliflar
              </Link>
            </div>
          </div>}
      </nav>
    </>
  );
}
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
export default Navbars;
