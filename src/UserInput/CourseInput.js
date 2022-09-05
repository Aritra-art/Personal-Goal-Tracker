import "./courseInput.css";
import styles from "./Button.module.css";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 25%;
  height: 5vh;
  border-radius: 0.5rem;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: ${(props) => (props.invalid ? "#8b005d" : "white")};
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  // @media (min-width: 768px) {
  //   width: 100%;
  // }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

const CourseInput = (props) => {
  const [courseInput, setCourseInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputSubmitHandler = (event) => {
    event.preventDefault();
    const userData = { text: courseInput, id: Math.random().toString() };
    setCourseInput("");
    if (userData.text.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onUserCourses(userData);
  };
  const courseInputChangeHandler = (event) => {
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
    setCourseInput(event.target.value);
  };

  return (
    <form onSubmit={inputSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Goal Manager</label>
        <input
          type="text"
          placeholder="enter your goal here"
          value={courseInput}
          onChange={courseInputChangeHandler}
        />
        <div className={styles.submit__btn}>
          <Button invalid={!isValid} type="submit">
            Add Goal
          </Button>
        </div>
      </div>
    </form>
  );
};
export default CourseInput;
