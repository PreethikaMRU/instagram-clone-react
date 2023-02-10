import Post from "./Post.js"
import "../styles/posts.scss"
import { db } from "../Firebase/Firebase.js";
import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";

function Posts(){
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        const q = query(collection(db,"posts"),orderBy("createdAt","desc"),limit(50));
        const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
                let p = [];
                QuerySnapshot.forEach((doc) => {
                    p.push({...doc.data(),id:doc.id});
                });
                setPosts(p);
        })
        return () => unsubscribe;
    },[]);
    return(
        <div className="PostContainer">
            {posts?.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    );
}

export default Posts;