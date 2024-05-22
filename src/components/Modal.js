import  ReactDOM  from "react-dom";
// import Backdrop from './Loader.js'
const Modal = ({closeModal,children}) => {
    return (
        ReactDOM.createPortal(
            <>
                {/* <Backdrop closeModal={closeModal} /> */}
                <div className="modal"> 
                    {children}
                    <span><button onClick={closeModal}> X </button></span>
                </div>
            </>,document.getElementById("modal-root")
            )
    )
}

export default Modal;