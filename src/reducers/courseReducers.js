import * as types from '../actions/actionTypes';


export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, Object.assign({},action.course)];

      case "FETCH_COURSES":
        return [{domain:"JAVASCRIPT",language:"ANGULAR JS"},{domain:"JAVASCRIPT",language:"NODE JS"},{domain:"JAVA",language:"HIBERNET"}];

    default:
      return state;
  }
}
