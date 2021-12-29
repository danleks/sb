import PropTypes from 'prop-types';
import React from 'react';

const UsersListItem = ({ user: { name, attendance, average } }) => {
    return (
        <div>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <div>X</div>
        </div>
    );
};

UsersListItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
        average: PropTypes.string.isRequired,
    }),
};

export default UsersListItem;
