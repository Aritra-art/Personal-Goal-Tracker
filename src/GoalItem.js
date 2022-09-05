import "./GoalItem.css";

const GoalItem = (props) => {
  // const [check, setCheck] = useState(props.text);

  const deleteHandler = () => {
    // setCheck("deleted");
    props.itemDelete(props.id);
  };
  return (
    <ul className="goal-item" onClick={deleteHandler}>
      {props.text}
    </ul>
  );
};

export default GoalItem;
