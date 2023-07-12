import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodosList = ({todos}) => {
  return(
    <ul>
      {todos.map((todo) => {
        return(
          <li className="flex justify-between bg-neutral-100 p-2 my-1" key={todo.id}>
            <div className="flex">
              <input className="mr-2" type="checkbox"></input>{todo.title}
            </div>
            <div>
              <button><AiFillEdit /></button>
              <button className="ml-1"><FaTrash /></button>
            </div>
          </li>
        )
      })}
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TodosList;