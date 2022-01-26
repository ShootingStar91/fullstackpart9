import React from "react";
import { CoursePart } from "../types";


export const Part = ({course}: {course: CoursePart}) => {
  return <div>
    <p><b>{ course.name } { 'exerciseCount' in course && course.exerciseCount}</b>
    <i>{ 'description' in course && <div>{course.description }</div> }</i>
    { 'groupProjectCount' in course && <div>{'Group projects: ' + course.groupProjectCount}</div> }
    { 'exerciseSubmissionLink' in course && <div>{'Submit to: ' + course.exerciseSubmissionLink}</div> }
    { 'requirements' in course && <div>{'Required skills: ' + course.requirements.map((req) => ' ' + req)}</div> } </p>
  </div>
  
}
