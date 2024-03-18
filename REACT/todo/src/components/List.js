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
        {props.items.map(item => <li className={item.done ? "done item" : "item"} key={item.id}>
            <Card>
                {item.text}
                <div>
                    <button onClick={() =>{ props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                    <button onClick={() => {props.onItemDeleted(item)}}><img alt="delete" src="../public/assets/bin.jpg"></img></button>
                </div>
            </Card>
        </li>)} 
    </ul>)
}

export default List;