import PostCard from "./PostCard"

interface PostCardProps {
  title: string;
  body: string;
}

const PostsData: Array<PostCardProps> = [ 
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"},
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"},
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"},
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"},
  {body: "Body test", title: "Title test"},
  {body: "Some body text", title: "Some title text"}
 ]

const Posts = () => {

    const renderUI = PostsData && PostsData.length > 0 
      ? PostsData.map(card => <PostCard key={card.title} title={card.title} body={card.body}/>)
      : (<p style={{margin:"0 auto", color: "red"}}>There's no posts yet</p>)

    return <div className="container">
    <h2>
      Welcome to site
    </h2>

    <div className="search-box">
      <input type="text" placeholder="Search" className="search-input"/>
      <button className="search-btn">Search</button>
    </div>

    <section className="posts">
      {renderUI}
    </section>
  </div>
}

export default Posts