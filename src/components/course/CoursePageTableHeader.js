import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
//import CoursePageTableHeaderStyle from './CoursePageTableHeaderStyle.css'
class CoursePageTableHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { sortCriteria: '' };

    this.sortCourse = this.sortCourse.bind(this);
  }

  sortCourse(event) {
    console.log(event.target.id);
    this.props.actions.sortCourses(event.target.id);
  }

  render(){

    var style = {
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
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// If you aren't passing mapStateToProps then pass null
export default connect(null,mapDispatchToProps)(CoursePageTableHeader);
