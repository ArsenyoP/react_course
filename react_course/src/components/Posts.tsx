import PostCard from "./PostCard"

interface PostCardProps {
  title: string;
  body: string;
}

const PostsData: Array<PostCardProps> = [ 
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"}
 ]

const Posts = () => {
    return <div className="container">
    <h2>
      Welcome to site
    </h2>

    <div className="search-box">
      <input type="text" placeholder="Search" className="search-input"/>
      <button className="search-btn">Search</button>
    </div>

    <section className="posts">
      {PostsData.map(card=> <PostCard title={card.title} body={card.body}/>)}
    </section>
  </div>
}

export default Posts