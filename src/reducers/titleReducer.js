import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

const initialState = {
    appName: "WEBPT28 Redux Party",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
// With redux, we have to initialize here rather than in a useReducer call:
export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    case TOGGLE_EDITING:
      console.log("Toggle editing case in the titleReducer");
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};