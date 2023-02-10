function Comment({comment}){
    return(
        <div className="commentBox">
            <span className="username1">{comment.commenter}</span>
            <span className="caption">{comment.comment}</span>
        </div>
    );
}

export default Comment;