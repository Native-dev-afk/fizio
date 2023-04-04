import { Button } from 'bootstrap';
import './scrollButton.scss'



function ScrollButton() {
    return ( 
        <>
            <div className="button-fixed">
                <div onClick={()=> window.scrollTo({
                top:0,
                behavior: "smooth",})}>
                    <i class="fas fa-angle-up"></i>
                </div>
            </div>
            
        </>
     );
}

export default ScrollButton;