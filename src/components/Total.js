import React from "react";

export const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises:{" "}
        {props.course.parts[1].exercises +
          props.course.parts[2].exercises +
          props.course.parts[0].exercises}
      </p>
    </div>
  );
};
