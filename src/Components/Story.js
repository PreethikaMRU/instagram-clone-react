import profileicon from "../images/Icon-Profile.png";

function Story(){
    return(
        <div className="StoryItem">
            <img className="userpic" src={profileicon} alt="user profile" height="60px" width="60px"></img>
            
            <span className="username">Preethika</span>
        </div>
    );
}

export default Story;