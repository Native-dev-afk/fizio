import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbars from "../navbars/navbars";

function InnoTechLayout() {
    return ( 
        <>
            <Navbars />
            <Outlet  />
            <Footer />
        </>
     );
}

export default InnoTechLayout;