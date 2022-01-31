import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { Average } from 'components/atoms/Average/Average';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import PropTypes from 'prop-types';
import { UsersContext } from 'providers/UsersProvider';
import React, { useContext } from 'react';

import { DetailStyles, ListItemStyles } from './UsersListItem.styles';

const UsersListItem = ({ user: { name, attendance, average } }) => {
    const { deleteUser } = useContext(UsersContext);
    return (
        <ListItemStyles onClick={() => deleteUser(name)}>
            <Average average={+average}>{average}</Average>
            <DetailStyles>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </DetailStyles>
            <DeleteButton>
                <DeleteIcon />
            </DeleteButton>
        </ListItemStyles>
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
