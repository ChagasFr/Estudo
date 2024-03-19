import React, {useState} from "react";
import Card from "./Card";

function Modal(props) {

    return (<div id="modal" onClick={hideModal} className= { show ? "modal" : "modal hide" }>
        <Card>
            Teste
        </Card>
    </div>)
}

export default Modal