import PropTypes from "prop-types";
import ListItem from "./ListItem";

const TodosList = ({todos}) => {
  return(
    <ul>
      <ListItem todos={todos} />
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