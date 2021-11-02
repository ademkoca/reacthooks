import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Users from "../Users.json";
import "./LikeModal.css";
// import { Modal, Button } from "bootstrap";

// Users.find((user) => user.username === "ademkoca").avatar;

const LikesModal = (props) => {
  var avatar = [];
  for (let i = 0; i < props.data.length; i++) {
    avatar.push(Users.find((user) => user.username === props.data[i]).avatar);
    console.log(avatar);
  }
  var likelist = [];
  for (let i = 0; i < props.data.length; i++) {
    likelist.push(
      <p className="likesRow">
        <img className="profileLikesImg" src={avatar[i]} alt={props.data[i]} />
        <span className="profileLikes">{props.data[i]}</span>
        <button type="button" className="btn btn-sm btn-primary">
          Follow
        </button>
      </p>
    );
  }
  // console.log(avatar);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Likes</Modal.Title>
      </Modal.Header>
      <Modal.Body>{likelist}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LikesModal;
