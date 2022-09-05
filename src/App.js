import { useState } from "react";
import CourseDisplay from "./UI/CourseDisplay";
import CourseInput from "./UserInput/CourseInput";

function App() {
  const dummyCourses = [
    { id: "c1", text: "Learn React from Udemy" },
    { id: "c2", text: "Get an Internship from Cuvette" },
  ];

  const [finalCourse, setFinalCourse] = useState(dummyCourses);

  const userCoursesHandler = (userCourses) => {
    setFinalCourse((prevCourse) => {
      return [userCourses, ...prevCourse];
    });
  };
  const courseDeleteHandler = function (goalID) {
    setFinalCourse((prevCourse) => {
      return prevCourse.filter((goal) => {
        return goal.id !== goalID;
      });
    });
  };
  let content = (
    <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
      No Goals to Show. Add new Goals ☝️
    </p>
  );

  if (finalCourse.length > 0) {
    content = (
      <CourseDisplay data={finalCourse} onCourseDelete={courseDeleteHandler} />
    );
  }

  return (
    <div>
      <CourseInput onUserCourses={userCoursesHandler} />
      {content}
    </div>
  );
}

export default App;
