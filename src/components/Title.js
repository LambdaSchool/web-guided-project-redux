import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { initialState, titleReducer } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

// Mapping functions for react-redux connect:

// mapStateToProps to read state
const mapStateToProps = (state) => {
  return {
    appName: state.appConfig.appName,
    editing: state.appConfig.editing
  }
}

// Step 3: connect components to the Redux store (HOC pattern, "enhancing" the Title component with the ability to read from and update the Redux store)
export default connect(mapStateToProps)(Title)