import Commit from "../coment/coment";
import Rooms from "../rooms/rooms";
import TexnoPark from "../texnopark/texno";

function LoginHome() {
    return ( 
        <>
            <Rooms />
            <TexnoPark />
            <Commit />
        </>
     );
}

export default LoginHome;