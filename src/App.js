import "./App.css";
import Mavzular from "./components/mavzular/mavzular";
import Mavzular2 from "./components/mavzular2/mavzular2";
import Services from "./components/services/Services";
import { Route, Routes, useNavigate } from "react-router-dom";
import InnoTechLayout from "./components/Layouts/innotechLayout";
import Home from "./components/home/Home";
import News from "./components/news/news";
import ScrollButton from "./components/scrollButton/scrollButton";
import { useEffect, useState } from "react";
import Atamalar from "./components/atamalar/atamalar";
import Mavzular3 from "./components/mavzular3/mavzular3";
import Mavzular4 from "./components/mavzular4/mavzular";
import Mavzular5 from "./components/mavzular5/mavzular";
import Mavzular6 from "./components/mavzular6/mavzular";
import Mavzular7 from "./components/mavzular7/mavzular";
import Mavzular8 from "./components/mavzular8/mavzular";
import Mavzular9 from "./components/mavzular9/mavzular";
import Mavzular10 from "./components/mavzular10/mavzular";
import Mavzular11 from "./components/mavzular11/mavzular";
import Test1 from "./components/testlar/test1";
import Test2 from "./components/testlar/test2";
import Test3 from "./components/testlar/test3";
import Test4 from "./components/testlar/test4";
import Test5 from "./components/testlar/test5";
import Test6 from "./components/testlar/test6";
import Test7 from "./components/testlar/test7";
import Test8 from "./components/testlar/test8";
import Test10 from "./components/testlar/test10";

export function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate]);

  return null;
}

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleShowBtn() {

      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleShowBtn);
    return () => {
      window.removeEventListener("scroll", handleShowBtn);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <ScrollToTop />
      {showButton && <ScrollButton />}
      <Routes>
        <Route path="/" element={<InnoTechLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/atamalar" element={<Atamalar />} />
          <Route path="/mavzular" element={<Mavzular />} />
          <Route path="/mavzular2" element={<Mavzular2 />} />
          <Route path="/mavzular3" element={<Mavzular3 />} />
          <Route path="/mavzular4" element={<Mavzular4 />} />
          <Route path="/mavzular5" element={<Mavzular5 />} />
          <Route path="/mavzular6" element={<Mavzular6 />} />
          <Route path="/mavzular7" element={<Mavzular7 />} />
          <Route path="/mavzular8" element={<Mavzular8 />} />
          <Route path="/mavzular9" element={<Mavzular9 />} />
          <Route path="/mavzular10" element={<Mavzular10 />} />
          <Route path="/mavzular11" element={<Mavzular11 />} />
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 />} />
          <Route path="/test5" element={<Test5 />} />
          <Route path="/test6" element={<Test6 />} />
          <Route path="/test7" element={<Test7 />} />
          <Route path="/test8" element={<Test8 />} />
          <Route path="/test9" element={<Test3 />} />
          <Route path="/test10" element={<Test10 />} />
          <Route path="/test1" element={<Test1 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
