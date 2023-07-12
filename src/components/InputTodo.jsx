import { FaPlusCircle } from "react-icons/fa";

const InputTodo = () => {
  return(
    <div className="flex m-2 shadow-md rounded-lg">
      <input className="w-80 p-1 mx-1 outline-none" type="text" placeholder="Add todo..."></input>
      <button className="flex flex-col justify-center px-2"><FaPlusCircle /></button>
    </div>
  )
};

export default InputTodo;