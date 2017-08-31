import React, { Component } from 'react';
import RosterRow from './roster-row';

class RosterBody extends Component {


  render() {
    const students = this.props.students.map((student) =>
      <RosterRow studentName={student}/>
    );
    return (
      <tbody>
          {students}
      </tbody>
    )
  }
}

export default RosterBody;
