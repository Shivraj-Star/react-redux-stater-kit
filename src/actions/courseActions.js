import * as types from './actionTypes';

export function createCourse(course) {
  return {type:types.CREATE_COURSE,course};
}

export function fetchCourse() {
  debugger;
  return {type:"FETCH_COURSES"};
}


// export createCourse = (course)=> {type:"CREATE_COURSE",course}
