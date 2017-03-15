import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

import * as manageCourseActions from './manage-course-actions';
import CourseForm from './manage-course-form';
import {authorsFormattedByDropdown} from '../../../selectors/selectors';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          course: Object.assign({}, this.props.course),
          errors: {},
          saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

   /* componentWillUnmount(){
      let course = this.state.course;
      let updatedCourse = this.props.courses.filter (c => c.id === course.id);
      if(updatedCourse[0].title === course.title)
        this.context.router.push('/about');
      else
        return 'You have unsaved information, are you sure you want to leave this page?' ;
    }*/

    componentWillReceiveProps(nextProps){
      if(this.props.course.id != nextProps.course.id)
        this.setState({course:Object.assign({},nextProps.course)});
    }

    updateCourseState(event){
      const field = event.target.name;
      let course = this.state.course;
      course[field]= event.target.value;
      return this.setState({course:course});
    }

    saveCourse(event){
      event.preventDefault();

      this.setState({saving: true});

      this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });
    }

    redirect (){
      this.setState({saving: false});
      toastr.success('Course Save');
      this.context.router.push('/courses');
    }

    render() {
        return (
          <div>
            <CourseForm
              allAuthors={this.props.authors}
              course={this.state.course}
              errors={this.state.errors}
              onChange={this.updateCourseState}
              onSave={this.saveCourse}
              saving={this.state.saving}
            />
          </div>
        );
    }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

ManageCoursePage.contextTypes ={
  router:PropTypes.object
};

function getCourseById(courses, courseId){
  const course = courses.filter(course => course.id === courseId); //Filter will always return an array

  if(course)
    return course[0];

  return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id;  // from the path `course/:id`
    let course = {id: '', watchHref:'', title:'', authorId:'', length:'', category:''};

    if(courseId && state.courses.length >0 ){
      course = getCourseById(state.courses, courseId);
    }

    return {
      course: course,
      courses: state.manageCourse,
      authors: authorsFormattedByDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(manageCourseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);