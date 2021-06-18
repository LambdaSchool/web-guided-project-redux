import React from 'react';
import { addMember } from '../actions/dragonListActions';
import DragonMember from './DragonMember';

class DragonList extends React.Component {
  state = {
    newMember: '',
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = () => {
    this.setState({
      ...this.state,
      members: [...this.members, {name: newMember, dragonStatus: true}]
    })
  }

  render() {
    return (
      <div>
        <div className="friends-list">
          {props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={() => handleClick()}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.dragonList.members
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMember: (memberName) => dispatch(addMember(memberName))
  }
}

const HOC = connect(mapStateToProps, mapDispatchToProps)

export default HOC(DragonList);
