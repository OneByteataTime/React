import React, { Component } from 'react';

class RosterRow extends Component {

  renderEmptyCells() {
    var emptyCells = [];
    for (var index=0; index < 10; index++) {
      emptyCells.push(<td></td>);
    }

    return (emptyCells)
  }

  render() {
    return (
      <tr>
        <td>{this.props.studentName}</td>
        <td>{this.props.gradeLevel}</td>
        {this.renderEmptyCells()}
      </tr>
    )
  }
}

export default RosterRow;
