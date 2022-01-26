import React from "react";
import { CoursePart } from "../types";
import { Part } from "./Part";

export const Content = ({courses}: {courses: Array<CoursePart>}) => {
  return (
    <div>
      {courses.map((course) => <Part key={course.name} course={course} />)}
    </div>
  )
}