import React from "react";
import Title from "./Title";
import jsonData from "../Data.json";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

const Home = (username) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // let url = postData;
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      // fetch(jsonData)
      .then((response) => response.json())
      .then((data) => setPost(data));
    // console.log('Post data:' + post);
    // console.log('Post data:' + jsonData);
  };
  // setPost(postData);
  // console.log(jsonData);
  return (
    <>
      <Title />
      <div className="postContainer">
        {jsonData.map(
          (
            item //replace "jsonData" with "post" to get data from jsonplaceholder API
          ) => (
            <SinglePost
              key={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
              totalLikes={item.totalLikes}
              username={username}
            />
          )
        )}
      </div>
    </>
  );
};

export default Home;
