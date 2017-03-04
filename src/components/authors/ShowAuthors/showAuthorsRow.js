import React, {PropTypes} from 'react';

const ShowAuthorsRow = ({author}) => {
  return (

    <tr>
     <td>{author.firstName}</td>
     <td>{author.lastName}</td>
    </tr>
  );
}

ShowAuthorsRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default ShowAuthorsRow;
