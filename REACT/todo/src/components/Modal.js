import React, {useState} from "react";
import Card from "./Card";

function Modal(props) {

    const [show, setShow] = useState(false) 
    return (<div className= { show ? "modal" : "modal hideModal" }>
        <Card>
            Teste
        </Card>
    </div>)
}

export default Modal