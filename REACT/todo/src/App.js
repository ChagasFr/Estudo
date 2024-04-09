import React, {useEffect, useState} from "react";
import List from "./components/List";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import Modal from "./components/Modal";
import './Todo.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import listReducer from "./reducers/listReducer";

const store = createStore(listReducer)

const SAVED_ITEMS = "savedItems"

function App() {
    
    const [showModal] = useState(false);
    // // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    //     if (savedItems) {
    //         setItems(savedItems);
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    // }, [items])

    // function onAddItem(text) {
    //     let item = new Item(text);

    //     setItems([...item, item])
    //     onHideModal();
    // }

    // function onItemDeleted(item) {
    //     let filteredItems = items.filter(it => it.id !== item.id)

    //     setItems(filteredItems)
    // }

    // function onDone(item) {
    //     let updatedItems = items.map(it => {
    //         // verificando se o tipo e o valor são iguais
    //         if(it.id === item.id) {
    //             it.done = !it.done;
    //         }
    //         return it;
    //     })

    //     setItems(updatedItems);
    // }

    function onHideModal() {
        setShowModal(false);
    }

    return (<div className="container">
        <Provider store={store}>
            <header className="header"><h1>Todo</h1> <button onClick={ () => {setShowModal(true) }} className="addButton">+</button></header> 
            {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
            <List></List>
            <Modal show={showModal} onHideModal = {onHideModal}><TodoForm></TodoForm></Modal>
        </Provider>
    </div>)
}


export default App