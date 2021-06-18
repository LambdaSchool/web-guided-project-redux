import React, { useState } from 'react';
import { updateTitle } from '../actions/titleActions';

const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
        props.updateTitle(newTitleText);
    }
    
    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleSubmit}>
            Update title
          </button>
        </div>);
}


// Mapping functions for react-redux connect:

// mapStateToProps to read state
const mapStateToProps = (state) => {
  return {}
}

// mapDispatchToProps to update state
const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (title) => dispatch(updateTitle(title))
  }
}

// Step 3: connect components to the Redux store (HOC pattern, "enhancing" the Title component with the ability to read from and update the Redux store)
export default connect(mapStateToProps, mapDispatchToProps)(TitleForm);