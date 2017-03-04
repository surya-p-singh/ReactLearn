import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageAuthorForm from './manageAuthorsForm';
import * as manageAuthorsActions from './manageAuthorsActions';

class ManageAuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event)
  {
    const key = event.target.name;
    const value = event.target.value;
    this.props.actions.formInputChange(key, value);
  }

  render() {
    return (
      <div>
        <ManageAuthorForm
          onChange = {this.onInputChange}
          author={this.props.author}
          errors={this.props.author.errors}
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
