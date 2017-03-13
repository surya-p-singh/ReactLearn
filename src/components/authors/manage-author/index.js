import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManageAuthorForm from './manage-author-form';
import * as manageAuthorsActions from './manage-author-actions';

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

  saveAuthor(event){
    event.preventDefault();
    /* console.log('this.props.actions.saveAuthor', this.props.author); */
    this.props.actions.saveAuthor(this.props.author);
    this.context.router.push('/authors');
  }

  componentDidMount(){
    const authorId = this.props.params.id;
    let author = this.props.author;
    console.log('this.props.author:',author);
    console.log('this.props.authors:',this.props.authors);
    if(authorId)
    {
      const existingAuthor = this.props.authors.filter((author)=> author.id === authorId)[0];
      this.props.actions.existingAuthorLoaded(existingAuthor);
    }
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

ManageAuthorsPage.contextTypes ={
  router:PropTypes.object
};

ManageAuthorsPage.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function  mapStateToProps(state, ownProps) {
  console.log('state:',state);
  console.log('authors',state.authors);
  return {
    author: state.author,
    authors:state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(manageAuthorsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorsPage);
