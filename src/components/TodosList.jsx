import PropTypes from "prop-types";
import ListItem from "./ListItem";

const TodosList = ({todosProps, handleChange}) => {
  return(
    <ul>
      {todosProps.map((todo) => {
        return(
          <ListItem key={todo.id} itemProp={todo} handleChange={handleChange} />
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