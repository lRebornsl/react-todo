import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const ListItem = ({itemProp, handleChange}) => {
  return(
    <li className="flex justify-between bg-neutral-100 p-2 my-1">
      <div className="flex">
        <input className="mr-2" type="checkbox" onChange={() => handleChange(itemProp.id)}></input>{itemProp.title}
      </div>
      <div>
        <button><AiFillEdit /></button>
        <button className="ml-1"><FaTrash /></button>
      </div>
    </li>
  );
}

export default ListItem;