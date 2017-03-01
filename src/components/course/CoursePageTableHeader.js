import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePageTableHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { sortKey: '' };

    this.sortCourse = this.sortCourse.bind(this);
  }

  sortCourse(event) {
    console.log(event.target.id);
  }

  render(){
    return(
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th><a id="title" onClick={this.sortCourse}>Title</a></th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// If you aren't passing mapStateToProps then pass null
export default connect(null,mapDispatchToProps)(CoursePageTableHeader);
