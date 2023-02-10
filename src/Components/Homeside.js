import "../styles/homeside.scss";
import profileicon from "../images/Icon-Profile.png";
import Suggestion from "./Suggestion";
import { auth } from "../Firebase/Firebase";

function Homeside(){
    const {displayName} = auth.currentUser;
    return(
        <div className="sidecontainer">
            <div className="loggedinuser">
                <div className="userdetails">
                    <img className="userpic2" src={profileicon} alt="user pic" height="50px" width="50px"></img>
                    <div className="useracc">
                        <span className="userid">{displayName}</span>
                        <span className="grey username2">{displayName}</span>
                    </div>
                </div>
                <span className="blue switch">Switch</span>
            </div>
            <div className="suggestionsC">
                <span className="grey switch">Suggestions for you</span>
                <span className="switch">See All</span>
            </div>
            <div className="accountContainer">
                <Suggestion />
            </div>
            <small className="small">By Preethika MRU</small>
        
        </div>
    );
}

export default Homeside;