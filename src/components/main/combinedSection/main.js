import BottomSection from "../bottomSection/bottomSection";
import TopSection from "../topSection/topSection";
import './main-style.css'

function Main(){
    return(
        <div className="main" style={{width: "100%"}}>
       <TopSection className="mt-10"/>
        <BottomSection/>
        </div>
    )
}

export default Main;