import React, { Component } from 'react';
import RosterHeader from './roster-header';
import RosterBody from './roster-body';

class Roster extends Component {

  generateStudents() {
      var students = [];

      for (var index=0; index < 50; index++) {
        students.push("Student " + index);
      }

      return students;
  }

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
    var students = this.generateStudents();

    return (
      <table className="App-full-width App-page-break">
          <RosterHeader/>
          <RosterBody students={students}/>
      </table>
    )
  }
}

export default Roster;
