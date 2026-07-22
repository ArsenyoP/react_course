interface PostCardProps {
    id: number
    title: string;
    body: string;
  }

const PostCard = ({ title, body, id }: PostCardProps) => {
    return <article className="post-card">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href="#">Read more</a> 
        <h5>{id}</h5>
        </article>

}

export default PostCard