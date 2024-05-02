import React, {useState} from "react";
import Card from "./Card";

function Modal(props) {

    function hideModal(e) {
        let target = e.target;
        if (target.id == 'modal') {
            props.onHideModal()
        }
    }

    return (<div id="modal" onClick={hideModal} className= { props.show ? "modal" : "modal hide" }>
        <Card>
            Teste
        </Card>
    </div>)
}

export default Modal