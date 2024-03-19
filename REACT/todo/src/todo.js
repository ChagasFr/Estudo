import React, {useEffect, useState} from "react";
import List from "./components/List";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import './Todo.css'

const SAVED_ITEMS = "savedItems"

function Todo() {
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(item) {
        let item = new Item(text);

        setItems([...item, item])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id != item.id)

        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            // verificando se o tipo e o valor são iguais
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }

    return (<div className="container">
        <header className="header"><h1>Todo</h1> <button className="addButton">+</button></header> 
        {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
        <List onDone={onDone} onItemDeleted = {onItemDeleted} items={items}></List>

    </div>)
}


export default Todo