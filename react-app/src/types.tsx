export type Course = {
  name: string;
  exerciseCount: number;
}

export interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

export interface CourseNormalPart extends CoursePartBase {
  type: "normal";
}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  exerciseSubmissionLink: string;
}

export interface CourseWithDescription extends CoursePartBase {
  description: string;
}

export interface VerboseCourse {
  name: string;
  exerciseCount: number;
  description: string;
  requirements: Array<string>;
  type: "special";
}

export type CoursePart = CourseNormalPart | CourseProjectPart 
          | CourseSubmissionPart | CourseWithDescription 
          | VerboseCourse;
