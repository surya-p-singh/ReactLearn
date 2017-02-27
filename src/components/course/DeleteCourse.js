import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class DeleteCourse extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(event){
    //console.log(this.props.actions);
    this.props.actions.deleteCourse(this.props.course);
  }

  render(){
    return(
      <input
        type="button"
        className="btn btn-xs btn-danger"
        value='Delete'
        onClick={this.onDelete}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(null,mapDispatchToProps)(DeleteCourse);
