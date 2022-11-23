import { useState } from "react";
import ListItem from "./ListItem";
import ToDoForm from "./ToDoForm";
import "./Todo.css"

export default function Todo() {
  const [showForm, setShowForm] = useState(false)
  const [thingsToDo, setThingsToDo] = useState([
    {title: "Take a walk", description: "Walk 1 mile"},
    {title: "Do coding work", description: "5 Hours of programming work"},
])

function addThingToDo (newThingToDo) {
  let copiedToDo = [newThingToDo, ...thingsToDo]
  // copying and adding the new thing to do to the list
  setThingsToDo(copiedToDo);
}

function deletePost (index) {
  let copiedToDo = [...thingsToDo]
  copiedToDo.splice(index, 1);
  setThingsToDo(copiedToDo);
}

  return (
    <div className="Todo">
      <h1>Things to do</h1>
      <button onClick={() => {
        setShowForm(true)
      }}>New Thing To Do</button>
      {showForm && <ToDoForm onClose={() => setShowForm(false)} addThingToDo={addThingToDo}/>}
      <hr></hr>
      {thingsToDo.map((thing, index) => <ListItem onDelete={() => deletePost(index)} thing={thing} key={index}/>)}
      {/* delete post takes in an index for where it's deleting */}
      {/* makes the onclose function that's activated in todoform */}
      {/* also makes the onsubmit which runs addthings when used */}
    </div>
  );

}
