import React, {PropTypes} from 'react';
import CourseListRow from './show-course-row';
import CoursePageTableHeader from './show-course-page-table-header';

const CourseList = ({courses}) => {


    return (
      <div>
      {courses && courses.length !== 0 &&
        <table className="table">
            <CoursePageTableHeader/>
            <tbody>
            {courses.map(course => <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
          </table>}
        </div>
    );
};


CourseList.propsTypes = {
    courses:PropTypes.array.isRequired
};

export default CourseList;
