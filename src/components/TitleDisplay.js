import React from 'react';

const TitleDisplay = (props)=> {
    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={props.handleToggleEditing}
        />
    </h2>);
}


// Mapping functions for react-redux connect:

// mapStateToProps to read state
const mapStateToProps = (state) => {
  return {
    appName: state.appName,
    editing: state.editing,
    title: state.title
  }
}

// mapDispatchToProps to update state
const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditing: () => dispatch(toggleEditing()),
    updateTitle: (title) => dispatch(updateTitle(title))
  }
}

// Step 3: connect components to the Redux store (HOC pattern, "enhancing" the Title component with the ability to read from and update the Redux store)
export default connect(mapStateToProps, mapDispatchToProps)(TitleDisplay);