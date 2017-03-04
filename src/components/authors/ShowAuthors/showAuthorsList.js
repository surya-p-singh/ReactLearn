import React, {PropTypes} from 'react';
import ShowAuthorsRow from './showAuthorsRow';

const ShowAuthorsList = ({authors}) => {
  return (
    <div>
      {authors && authors.length !== 0 &&
      <table className="table">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {authors.map(author => <ShowAuthorsRow key={author.id} author={author} />
        )}
        </tbody>
      </table>}
    </div>
  );
}

ShowAuthorsList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default ShowAuthorsList;
