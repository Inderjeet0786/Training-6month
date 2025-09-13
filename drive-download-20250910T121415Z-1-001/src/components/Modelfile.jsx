import { useState } from "react";
import PageHeader from "../PageHeader";
import ReactModal from "react-modal";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function Modelfile(){
     const [modalIsOpen, setIsOpen] = useState(false);
     function openModal() {
    setIsOpen(true);
  }
   function closeModal() {
    setIsOpen(false);
  }
    return(
        <>
                <PageHeader child={"model"}/>
                     <button onClick={openModal}>Open Modal</button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <label htmlFor="" className="form-label">Email</label>
          <input type="email" name="" id="" className="form-control " />
          <label htmlFor="" className="form-label">Password</label>
          <input type="password" name="" id="" className="form-control  " />
          <button className="btn btn-primary mt-5">Login</button>
         
        </form>
      </ReactModal>
        </>
    )
}