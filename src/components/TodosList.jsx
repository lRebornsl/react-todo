// import PropTypes from "prop-types";
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

export default TodosList;