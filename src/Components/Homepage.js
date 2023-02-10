import "../styles/homepage.scss";
import Homeside from "./Homeside";
import Posts from "./Posts";
import Stories from "./Stories";
function Homepage(){
    return(
        <div className="Homepage">
            <div className="HomeMain">
               <Stories />
               <Posts />
            </div>
            <Homeside />
        </div>
    );
}

export default Homepage;