import type { PostCardProps } from "../Interfaces/Interfaces"

const PostCard = ({ title, body, id, titleClick }: PostCardProps) => {
    return <article className="post-card">
        <h3 onClick={() => titleClick(title)}>{title}</h3>
        <p>{body}</p>
        <a href="#">Read more</a> 
        <h5>{id}</h5>
        </article>

}

export default PostCard