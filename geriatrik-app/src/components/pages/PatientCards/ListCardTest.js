import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ListCardTest = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000000";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <tr className="list-item-patient">
      <td></td>
      <td>{props.testObj.examen}</td>
      <td onClick={openModal}>{props.testObj.resultados}</td>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Puntajes:</h2>
        <br></br>
        <div>Visoespacial: 3/5 </div>
        <div>Denominación: 3/5 </div>
        <div>Memoria: 3/5 </div>
        <div>Atención: 3/5 </div>
        <div>Lenguaje: 3/5 </div>
        <div>Abstracción: 3/5 </div>
        <div>Recuerdo Diferido: 3/5 </div>
        <div>Orientación: 3/5 </div>
        <br></br>
        <button onClick={closeModal}>CLOSE</button>

      </Modal>
      <td>{props.testObj.fecha}</td>
      <td>{props.testObj.notas}</td>
    </tr>
  );
};

export default ListCardTest;
