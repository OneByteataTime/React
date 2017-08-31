import React, { Component } from 'react';

class RosterHeader extends Component {

  renderEmptyColumns() {
      var emptyColumns = [];
      for (var index=0; index < 10; index++) {
        emptyColumns.push(<th></th>);
      }

      return (
        emptyColumns
      );
  }

  render() {
    return (
      <thead>
        <tr className="App-report-header">
          <th colSpan="12">
            <span>Honors Biology 3</span>
            <span>Coleman, Aaron</span>
          </th>
        </tr>
        <tr className="App-table-header">
          <th>Student</th>
          <th>Grade Level</th>
          {this.renderEmptyColumns()}
        </tr>
      </thead>
    )
  }
}

export default RosterHeader;
