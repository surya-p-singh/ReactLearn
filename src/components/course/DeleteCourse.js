import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import ConfirmationModal from '../common/ConfirmationModal';

class DeleteCourse extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { isModalOpen: false };

    this.onDelete = this.onDelete.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onDelete(event){
    this.props.actions.deleteCourse(this.props.course);
    this.setState({ isModalOpen: false });
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render(){
    return(
    <div>

      <input
        type="button"
        className="btn btn-xs btn-danger"
        value='Delete'
        onClick={this.openModal}/>

      <ConfirmationModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
        <h1>Do you really want to delete this course</h1>
        <p><button onClick={() => this.onDelete()}>Yes</button> <button onClick={() => this.closeModal()}>No</button></p>
      </ConfirmationModal>
    </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// If you aren't passing mapStateToProps then pass null
export default connect(null,mapDispatchToProps)(DeleteCourse);
