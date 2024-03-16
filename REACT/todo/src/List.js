import React from "react"

function deleteItem(item) {
    console.log(item)
}

function List(props) {
    return (<ul>
        {props.items.map(item => <li key = {item.id}>
            {item.text}
            <button onClick={() => {deleteItem(item) }}><img alt="delete" src="./assets/bin/png"></img></button>
        
        </li>)} 
    </ul>)
}

export default List;