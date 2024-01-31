import { createPortal } from "react-dom";
import clss from "./Modal.module.css";

const Backdrop = props => {

    return <div className={clss.backdrop} onClick={props.onClick}></div>

}

const ModalOverlay = props => {
    return <div className={clss.modal}>
        <div className={clss.content}>{props.children}</div>
    </div>
}

const Modal = props => {

return <>
   {createPortal(<Backdrop onClick={props.onClick}/> , document.getElementById("overlays"))}
   {createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById("overlays")) }
</>

}

export default Modal; 