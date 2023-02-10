import Comment from "./Comment.js";
import profileicon from "../images/Icon-Profile.png";
import moreicon from "../images/Icon-More.png";
import hearticon from "../images/Icon-Heart.png";
import redhearticon from "../images/Icon-RedHeart.jpg";
import commenticon from "../images/Icon-Comment.png";
import sendicon from "../images/Icon-Send.png";
import saveicon from "../images/Icon-Save.png";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.js";
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/Firebase.js";

function Post({post}){
    const {uid,displayName}=auth.currentUser;
    const [comment,setComment]=useState();
    const [commentDisplay,setCommentDisplay]=useState([]);

    const handleComment = async() => {
        const currentPost = doc(db,"posts",post.id);
        await addDoc(collection(currentPost,"comments"),{
            commenter:displayName,
            comment:comment,
            created:serverTimestamp(),
            uid
        });
        setComment("");
    }

    useEffect(()=>{
        const currentPost = doc(db,"posts",post.id);
        const q = query(
            collection(currentPost,"comments"),
            orderBy("created","desc"),
        );
        const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
            let c = [];
            QuerySnapshot.forEach((doc)=>{
                c.push({...doc.data(),id:doc.id});
            });
            setCommentDisplay(c);
        });
        return () => unsubscribe;
    },[post.id]);

    

    return(
        <div className="PostItem">
            <div className="postheader">
                <div className="userinfo">
                    <img className="userpic1" src={profileicon} alt="user profile" width="30px" height="30px"></img> 
                    <span className="username1">{post.user}</span>
                    <span className="posttime">{post.date}</span>
                </div>
                <div className="moreoptions">
                    <img className="morebutton" src={moreicon} alt="more" width="20px" height="20px"></img>
                </div>
            </div>
            <div className="postpicContainer">
                <img className="postpic" alt="post" src={post.photo} width="450px" height="550px"></img>
            </div>
            <div className="picaction">
                <div className="lcs">
                    <img className="likebutton" src={hearticon} width="25px" height="25px" alt="like button"></img>
                    <img className="heartbutton" src={redhearticon} width="25px" height="25px" alt="like button"></img>
                    <img className="commentbutton" src={commenticon} width="25px" height="25px" alt="like button"></img>
                    <img className="sendbutton" src={sendicon} width="25px" height="25px" alt="like button"></img>
                </div>
                <div className="save">
                    <img className="savebutton" src={saveicon} width="25px" height="25px" alt="like button"></img>
                </div>
            </div>
            <div className="piccaption">
                <small>0 Like</small>
                <div className="captiondetails">
                    <span className="username1">{post.user}</span>
                    <span className="caption">{post.caption}</span>
                </div>
            </div>
            {commentDisplay?.map((comment)=>(
                <Comment key={comment.id} comment={comment}/>
            ))}
            <div className="piccomment">
                
                <input className="comment" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)}></input>
                {comment?<button className="postComment" onClick={handleComment}>Post</button> :""}
            </div>
        </div>
    );
}

export default Post;