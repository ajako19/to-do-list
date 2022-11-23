import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";
import "./ToDoForm.css"

export default function ToDoForm ({addThingToDo, onClose}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <form className="ToDoForm" onSubmit={(e) => {
            addThingToDo({title: title, description: description})
            e.preventDefault();
            onClose();
            // when the form submits, runs my own add function
            // that is the add thing to do function in Todo
        }}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => {
                setTitle(e.target.value);
            }}/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" onChange={(e) => {
                setDescription(e.target.value);
            }}/>
            <input className="submitButton" type="submit" value="Add"></input>
            <AiOutlineClose className="x" onClick={onClose}/>

        </form>
    )
}