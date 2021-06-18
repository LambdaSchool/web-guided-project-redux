import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing } from '../actions/titleActions';

const TitleDisplay = (props)=> {
    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={props.toggleEditing}
        />
    </h2>);
}


// Mapping functions for react-redux connect:

// mapStateToProps to read state
const mapStateToProps = (state) => {
  return {
    title: state.appConfig.title
  }
}

// mapDispatchToProps to update state
const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditing: () => dispatch(toggleEditing()),
  }
}

// Step 3: connect components to the Redux store (HOC pattern, "enhancing" the Title component with the ability to read from and update the Redux store)
export default connect(mapStateToProps, mapDispatchToProps)(TitleDisplay);