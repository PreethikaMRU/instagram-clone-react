import "../styles/navigation.scss";
import logo from "../images/Logo-Instagram.png";
import icon from "../images/Icon-Instagram.png";
import searchicon from "../images/Icon-Search.png";
import homeicon from "../images/Icon-Home.png";
import exploreicon from "../images/Icon-Explore.png";
import reelsicon from "../images/Icon-Reels.jpg";
import messageicon from "../images/Icon-Message.png";
import notificationicon from "../images/Icon-Heart.png";
import createicon from "../images/Icon-Create.png";
import profileicon from "../images/Icon-Profile.png";
import burgericon from "../images/Icon-Burger.png";
import { useRef } from "react";
import Create from "./Create";

function Navigation({handleLogin}){
    const burgerRef = useRef();
    const createRef = useRef();
    let open = "true";

    const handleBurger = (ele) => {
        if(ele==="true"){
            burgerRef.current.style.display="block";
            open="false";
        }
        else{
            burgerRef.current.style.display="none";
            open="true";
        }
    }
    const handleCreate = (val) => {
        if(val){
            createRef.current.style.display="block";
        }
        else{
            createRef.current.style.display="none";
        }
    }
    return(
        <div className="div">
            <Create ref={createRef} handleCreate={handleCreate}/>
            <div className="logout" ref={burgerRef} onClick={() => handleLogin(false)}>
                    <span className="logoutButton">Logout</span>
            </div>
            <div className="navigation">
                <div className="logoContainer">
                <img className="logo" src={logo} alt="instagram logo" width="105px" height="60px"/>
                <img className="logo1" src={icon} alt="instagram logo" width="20px" height="20px"/>
                </div>
                <div className="menuItems">
                <div className="home">
                    <img className="homeIcon" src={homeicon} alt="home icon" width="25px" height="25px"/>
                    <span className="homeText" >Home</span>
                </div>
                <div className="search">
                    <img className="searchIcon" src={searchicon} alt="search icon" width="25px" height="25px"/>
                    <span className="searchText" >Search</span>
                </div>
                <div className="explore">
                    <img className="exploreIcon" src={exploreicon} alt="explore icon" width="25px" height="25px"/>
                    <span className="exploreText" >Explore</span>
                </div>
                <div className="reels">
                    <img className="reelsIcon" src={reelsicon} alt="reels icon" width="25px" height="25px"/>
                    <span className="reelsText" >Reels</span>
                </div>
                <div className="messages">
                    <img className="messagesIcon" src={messageicon} alt="messages icon" width="25px" height="25px"/>
                    <span className="messagesText" >Messages</span>
                </div>
                <div className="notifications">
                    <img className="notificationsIcon" src={notificationicon} alt="notifications icon" width="25px" height="25px"/>
                    <span className="notificationsText" >Notifications</span>
                </div>
                <div className="create" onClick={() => handleCreate(true)}>
                    <img className="createIcon" src={createicon} alt="create icon" width="25px" height="25px"/>
                    <span className="createText" >Create</span>
                </div>
                <div className="profile">
                    <img className="profileIcon" src={profileicon} alt="profile icon" width="25px" height="25px"/>
                    <span className="profileText" >Profile</span>
                </div>
                </div>
                <div className="burger" onClick={() => handleBurger(open)}>
                    <img className="burgerIcon" src={burgericon} alt="menu icon" width="25px" height="25px"></img>
                    <span className="burgerText">More</span>
                </div>
                
            </div>
            <div className="navBottom">
                <div className="homeBottom">
                    <img className="homeIcon" src={homeicon} alt="home icon" width="25px" height="25px"/>
                </div>
                <div className="exploreBottom">
                    <img className="exploreIcon" src={exploreicon} alt="explore icon" width="25px" height="25px"/>
                </div>
                <div className="reelsBottom">
                    <img className="reelsIcon" src={reelsicon} alt="reels icon" width="25px" height="25px"/>
                </div>
                <div className="createBottom" onClick={() => handleCreate(true)}>
                    <img className="createIcon" src={createicon} alt="create icon" width="25px" height="25px"/>
                </div>
                <div className="messagesBottom">
                    <img className="messagesIcon" src={messageicon} alt="messages icon" width="25px" height="25px"/>
                    
                </div>
                <div className="profileBottom">
                    <img className="profileIcon" src={profileicon} alt="profile icon" width="25px" height="25px"/>
                    
                </div>
            </div>
            <div className="navTop">
                <div className="logoContainerTop">
                    <img className="logo" src={logo} alt="instagram logo" width="105px" height="60px" onClick={() => handleBurger(open)}/>
                </div>
                <div className="menuTop">
                    <div className="searchBarContainer">
                        <div className="searchIconC">
                        <img className="searchIconTop" src={searchicon} alt="search icon" width="18px" height="18px"/>
                        </div>
                        <input className="searchBar" type="text" placeholder="Search"></input>
                    </div>
                    <div className="notificationsTop">
                        <img className="notificationsIcon" src={notificationicon} alt="notifications icon" width="25px" height="25px"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navigation;