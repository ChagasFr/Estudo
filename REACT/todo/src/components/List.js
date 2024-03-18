import React from "react"
import ListItem from "./ListItem";

function List(props) {
    return (<ul>
        {props.items.map(item => <ListItem></ListItem>)} 
    </ul>)
}

export default List;