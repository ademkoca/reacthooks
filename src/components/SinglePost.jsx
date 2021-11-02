import React from "react";
// import yin from '../img/posts/yin.jpg'
import { useState } from "react";
import "./SinglePost.css";
import Posts from "../Data.json";
import LikesModal from "./LikesModal";

const SinglePost = (props) => {
  const [liked, setLiked] = useState(false);
  const likers = Posts.find((post) => post.image === props.image).totalLikes;
  // console.log(likers);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container-sm">
      <div
        className="card mx-auto my-2"
        key={props.id}
        style={{ width: "18rem" }}
      >
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <i
            className={`bi bi-heart${liked ? "-fill" : ""}`}
            liked={false}
            onClick={() =>
              !liked ? setLiked(true) : alert("Prc! Nema da anlajkuješ")
            }
          ></i>
          {liked && (
            <>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">by: {props.body}</p>
              <span className="text-muted">
                You and{" "}
                <span className="link" onClick={() => setModalShow(true)}>
                  {props.totalLikes.length} others
                </span>{" "}
                like this
                <LikesModal
                  data={likers}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
