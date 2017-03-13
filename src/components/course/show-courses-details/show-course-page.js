import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as showCourseActions from './show-courses-details-actions';
import CourseList from './show-course-list';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {sortCriteria:''};
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course/');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        {courses && courses.length > 0 && <div><br/>Total number of courses exist:{courses.length}</div>}
        <div><br/></div>
        <div>
          <input
            type="submit"
            className="btn btn-primary"
            value=" Add Course"
            onClick={this.redirectToAddCoursePage}/>

          <CourseList courses={courses}/>
        </div>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function sortCoursesByTitle(courses){
  const sortedCourses = courses.slice(0);
  sortedCourses.sort(function (a, b) {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  return sortedCourses;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showCourseActions, dispatch)
  };
}

/*const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
 export default connectedStateAndProps(CoursesPage);*/

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

