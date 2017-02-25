import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {

  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage =  this.redirectToAddCoursePage.bind(this);
  }

  courseRow (course, index){
    return <div key={index}>{course.title}</div> ;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course/');
  }

  render(){
    const {courses} = this.props;
    return(
      <div>
        <input
          type="submit"
          className="btn btn-primary"
          value=" Add Course"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return{
    courses:state.courses
  };
}

function mapDispatchToProps(dispatch)
{
  return{
    actions: bindActionCreators(courseActions,dispatch)
  };
}

/*const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
 export default connectedStateAndProps(CoursesPage);*/

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

