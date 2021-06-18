import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

export const initialState = {
    appName: "Redux Test",
    title: "Dragon Member List 🐲",
    editing: false
  };
  
export const titleReducer = (state, action) => {
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