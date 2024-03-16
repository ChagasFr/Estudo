import React from "react"

function List(props) {
    return (<ul>
        {props.items.map(item => <li>
            {item.text}
            <button onClick={() => props.onItemDeleted(item)}></button>
        
        </li>)} 
    </ul>)
}

export default List;