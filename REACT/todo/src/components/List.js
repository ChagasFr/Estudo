import React from "react"
import Card from "./Card"

function DoneImg(props) {
    if(props.done) {
       return <img alt="done" src="../public/assets/on.png"></img>
    } else {
        return (<img alt="undone" src="../public/assets/off.jpg"></img>)
    }
}

function List(props) {
    return (<ul>
        {props.items.map(item =>)} 
    </ul>)
}

export default List;