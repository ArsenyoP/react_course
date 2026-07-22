import React, { useState } from "react";
import PostCard from "./PostCard"


interface Post {
  id: number;
  title: string;
  body: string;
}



const PostsData: Array<Post> = [ 
  {body: "Body test", title: "First Title test", id:1},
  {body: "Body test", title: "Second Title test", id:2},
  {body: "Body test", title: "Third Title test", id:3},
  {body: "Body test", title: "Fourth Title test", id:4},
  {body: "Body test", title: "Fifth Title test", id:5},
 ]

const Posts = () => {
    const [search, setSearch] = useState("");

    const filteredCards = PostsData.filter(x => x.title.toLowerCase().includes(search.toLowerCase()))

    const renderUI = filteredCards && filteredCards.length > 0 
      ? filteredCards.map(card => <PostCard key={card.id} title={card.title} body={card.body} id={card.id} titleClick={setSearch}/>)
      : (<p style={{margin:"0 auto", color: "red"}}>There's no posts yet</p>)


    return <div className="container">
    <h2>
      Welcome to site
    </h2>

    <div className="search-box">
      <input type="text" placeholder="Search" 
      onChange={(e) => setSearch(e.target.value)}
      value={search}
       className="search-input"/>
      <button className="search-btn">Search</button>
    </div>

    <section className="posts">
      {renderUI}
    </section>
  </div>
}

export default Posts