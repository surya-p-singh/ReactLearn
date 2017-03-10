import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ShowAuthorsRow = ({author}) => {
  return (

    <tr>
      <td><Link to={'/author/' + author.id} > {author.id} </Link></td>
     <td>{author.firstName}</td>
     <td>{author.lastName}</td>
     <td>12/12/2012</td>
    </tr>
  );
}

ShowAuthorsRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default ShowAuthorsRow;
