import "../styles/create.scss";
import React, { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../Firebase/Firebase";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { ref as newref} from "firebase/storage";



const Create=React.forwardRef((props,ref)=>{
    const {uid,displayName}=auth.currentUser;
    const [img,setImg]=useState();
    const [caption,setCaption]=useState();
    const imageRef = useRef();
    const inputRef = useRef();
    const showImage = (e) => {
        imageRef.current.src=URL.createObjectURL(e.target.files[0]);
        setImg(e.target.files[0]);
    }
    const handleUpload = () => {
        inputRef.current.click();
    }
    const handleSubmit = async() => {
        const date = new Date();
        const storageRef = newref(storage,`${uid}/${img.name}`);

        await uploadBytes(storageRef,img).then(()=>{
            console.log("Completed upload in storage");
        });

        await getDownloadURL(storageRef)
        .then((url) => {
            addDoc(collection(db,"posts"),{
                user: displayName,
                photo: url,
                caption: caption,
                createdAt: serverTimestamp(),
                date:date.toLocaleDateString(),
                uid
            });    
        })
         
        
        imageRef.current.src="";
        setImg("");
        setCaption("");
        props.handleCreate(false);
    }
    return(
    <div className="createPostContainer" ref={ref}>
        <div className="createPost">
            <div className="postHeader">
                <h4>Create new post</h4>
            </div>
            <div className="fileInput">
                <input type="file" accept="image/*" onChange={(e) => showImage(e)} ref={inputRef}></input>
                <button onClick={handleUpload}>Browse</button>
            </div>
            <img className="postImage" width="200px" alt='' ref={imageRef}></img>
            <input className="postCaption" type="text" placeholder="Enter Caption..." value={caption} onChange={(e) => setCaption(e.target.value)}></input>
            <button className={`postUpload ${(img && caption)?"notdisabled":"disabled"}`} onClick={handleSubmit}>Upload</button>
        </div>
        <span onClick={() => {props.handleCreate(false)}} className="closeButton">X</span>
    </div>
    );
});
   

export default Create;