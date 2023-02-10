import profileicon from "../images/Icon-Profile.png";

function Suggestion(){
    return(
        <div className="suggestionAcc">
            <div className="userdetails">
            <img className="userpic1" src={profileicon} alt="user profile" width="30px" height="30px"></img>
            <div className="userinfo1">
                <span className="userid">Jane Doe</span>
                <span className="grey followedBy">Followed by John Doe</span>
            </div>
            </div>
            <span className="blue switch">Follow</span>
        </div>
    );
}

export default Suggestion;