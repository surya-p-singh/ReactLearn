
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as showAuthorsActions from './showAuthorsActions'

class ShowAuthors extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Authors
      </div>
    );
  }
}

ShowAuthors .propTypes = {
  actions: PropTypes.func.isRequired
};

function  mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showAuthorsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAuthors);
