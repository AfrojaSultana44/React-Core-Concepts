export default function Post({post}){
    const {title,body,id,userId} = post; 
    return(
        <div className="box">
            <h4>Title: {title}</h4>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p>Body: {body}</p>
        </div>
    )
}