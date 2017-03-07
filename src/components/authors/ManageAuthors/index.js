import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageAuthorForm from './manageAuthorsForm';
import * as manageAuthorsActions from './manageAuthorsActions';

class ManageAuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onInputChange = this.onInputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  onInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.props.actions.formValueUpdated(key, value);
  }

  onBlur(event) {
    this.props.actions.formValueTouched(event.target.name, event.target.value);
  };

  saveAuthor(){
    console.log('this.props.actions.saveAuthor', this.props.author)
    this.props.actions.saveAuthor(this.props.author);
  }

  render() {
    return (
      <div>
        <ManageAuthorForm
          onChange = {this.onInputChange}
          onBlur={this.onBlur}
          author={this.props.author}
          errors={this.props.author.errors}
          onSave={this.saveAuthor}
        />
      </div>
    );
  }
}

ManageAuthorsPage.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function  mapStateToProps(state, ownProps) {
  //const author = {firstName:'', lastName:'', errors:{ firstName:'',lastName:'' }};

  console.log('state:', state);
  return {
    author: state.author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(manageAuthorsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorsPage);
