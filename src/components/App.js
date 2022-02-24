import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticaList from "./ArticleList "

console.log("App",blogData.posts);

function App() {
  return (
    <div className="App">
      <Header author={blogData.name} />
      <About image={blogData.image} text={blogData.about} />
      <ArticaList info={blogData.posts}/>
    </div>
  );
}

export default App;
