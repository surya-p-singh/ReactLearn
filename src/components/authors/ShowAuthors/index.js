
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import * as showAuthorsActions from './show-authors-actions';
import ShowAuthorsList from './show-authors-list'

class ShowAuthors extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage(){
    browserHistory.push('/author/');
  }

  componentDidMount(){
    this.props.actions.loadAuthors();
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <ShowAuthorsList authors={this.props.authors}/>
        <br/>
        <input
          type="submit"
          className="btn btn-primary"
          value=" Add Author"
          onClick={this.redirectToAddAuthorPage}/>
      </div>
    );
  }
}

ShowAuthors.propTypes = {
  actions: PropTypes.func.isRequired
};

function  mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(showAuthorsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAuthors);
