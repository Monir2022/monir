//Project files
import Modal from "./Modal";
//NPM packages
import { useState } from "react";
import ModalChild from "./ModalChild";

export default function Card({ item }) {
  const { photo, title, github } = item;

  //local state
  const [modal, setModal] = useState(false);

  //method
  function onToggleModal() {
    setModal(!modal);
  }
  const viewCard = github ? (
    <button onClick={() => onToggleModal()}>View more</button>
  ) : (
    <p>Comming Soon</p>
  );
  console.log(title);
  return (
    <div className="container">
      <img src={photo} alt="Avatar" className="image" />

      {title}
      <div className="overlay">
        <div className="text">
          {viewCard}
          <Modal show={modal} close={onToggleModal} title={title}>
            <ModalChild item={item} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
