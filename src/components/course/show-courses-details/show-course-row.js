import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import DeleteCourse from './delete-course';

const CourseListRow = ({course}) => {
    return(
      <tr>
        <td><a href={course.watchHref} target="_blank">Watch</a></td>
        <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
        <td>{course.length}</td>
        <td><DeleteCourse course={course} /></td>
      </tr>
    );
};

CourseListRow.propsTypes = {
  course:PropTypes.object.isRequired
};

export default CourseListRow;
