import React, {useState} from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";

function TodoForm(props) {
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItemEvent(event) {
        event.preventDefault();

        if(text) {
           dispatch(addItem());
            setText("");
            props.onHideModal()
        }
    }

    return (
        <form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm