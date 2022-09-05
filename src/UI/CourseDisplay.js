import GoalItem from "../GoalItem";

const CourseDisplay = (props) => {
  const propReceiver = (id) => {
    props.onCourseDelete(id);
  };
  const courseDisplayHandler = (course) => {
    return (
      <GoalItem
        key={course.id}
        id={course.id}
        text={course.text}
        itemDelete={propReceiver}
      />
    );
  };

  return <div>{props.data.map(courseDisplayHandler)}</div>;
};
export default CourseDisplay;
