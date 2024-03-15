import React from "react";
import './Todo.css'
import List from "./List";

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    return (<div className="container">
        <h1>Todo</h1>
        <TodoForm></TodoForm>
        <List items={items}></List>

    </div>)
}

function TodoForm(props) {

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem (event) {
        event.preventDefault();

        if(text) {
            setItems([...items, text])
            setText("");
        }
    }

    return (
        <form>
        <input onChange={handleChange} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
        </form>
    )
}


export default Todo