import { FaRegTrashAlt } from "react-icons/fa";

export default function ListItem ({thing, onDelete}) {
    return (
        <div className="ListItem">
            <p>Title: {thing.title}</p>
            <p>Description: {thing.description}</p>
            <FaRegTrashAlt onClick={onDelete}/>
        </div>
    )
}