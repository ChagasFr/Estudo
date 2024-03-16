import React from "react"

function DoneImg(props) {
    if(props.done) {
       return <img alt="done" src="../public/assets/on.png"></img>
    } else {
        return (<img alt="undone" src="../public/assets/off.jpg"></img>)
    }
}

function List(props) {
    return (<ul>
        {props.items.map(item => <li>
            {item.text}
            <button onClick={() =>{}}><DoneImg done={}></DoneImg></button>
            <button onClick={() => {props.onItemDeleted(item)}}><img alt="delete" src="../public/assets/bin.jpg"></img></button>
        
        </li>)} 
    </ul>)
}

export default List;