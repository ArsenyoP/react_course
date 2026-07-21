interface PostCardProps {
    title: string;
    body: string;
  }

const PostCard = ({ title, body }: PostCardProps) => {
    return <article className="post-card">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href="#">Read more</a> 
        </article>

}

export default PostCard