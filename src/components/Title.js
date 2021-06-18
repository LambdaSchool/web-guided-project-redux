import React, { useReducer } from 'react';

import { initialState, titleReducer } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  // dipatching functions:
  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

export default Title;

// Step 3: connect components to the Redux store

// mapStateToProps to read state
const mapStateToProps = (state) => {
  return {
    appName: state.appName,
    editing: state.editing,
    title: state.title
  }
}

// mapDispatchToProps to update state

// connect(mapStateToProps, mapDispatchToProps)(Title)