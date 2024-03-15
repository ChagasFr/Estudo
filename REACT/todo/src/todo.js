import React from "react";

function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem (event) {
        event.preventDefault();
        setItems([...items, text])
        setText("");
    }

    return (<div className="container">
        <h1>Todo</h1>
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>

        <ul>
            <li>Item</li>
        </ul>
    </div>)
}

export default Todo