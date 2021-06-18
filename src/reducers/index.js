import { combineReducers } from "redux";

// keys are the name we'll use to branch the state tree
// for example: state.dragonList.members or state.appConfig.title

// valuesa are the individual reducers, each of which manages its own portion of the complete state tree.

export const rootReducer = combineReducers({
    dragonList: dragonListReducer,
    appConfig: titleReducer
});