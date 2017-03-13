import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as showCourseActions from './show-courses-details-actions';
//import CoursePageTableHeaderStyle from './CoursePageTableHeaderStyle.css'
class CoursePageTableHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { sortCriteria: '' };

    this.sortCourse = this.sortCourse.bind(this);
  }

  sortCourse(event) {
    this.props.actions.sortCourses(event.target.id);
  }

  render(){

    const style = {
      cursor: 'pointer'
    };

    return(
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th><a id="title" onClick={this.sortCourse} style={style}>Title</a></th>
        <th><a id="authorId" onClick={this.sortCourse} style={style}>Author</a></th>
        <th><a id="category" onClick={this.sortCourse} style={style}>Category</a></th>
        <th><a id="length" onClick={this.sortCourse} style={style}>Duration</a></th>
      </tr>
      </thead>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showCourseActions, dispatch)
  };
}
// If you aren't passing mapStateToProps then pass null
export default connect(null,mapDispatchToProps)(CoursePageTableHeader);
