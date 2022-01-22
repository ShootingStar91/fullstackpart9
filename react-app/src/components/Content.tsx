import React from "react";
import { Course } from "../types";

export const Content = ({courses}: {courses: Array<Course>}) => {
  return (
    <div>
    {courses.map((course) => <p key={course.name}>{course.name} {course.exerciseCount}</p>)}
    </div>
  )
}