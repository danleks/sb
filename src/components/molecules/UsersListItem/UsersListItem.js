import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { Average } from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { DetailStyles, ListItemStyles } from './UsersListItem.styles';

const UsersListItem = ({ user: { name, attendance, average } }) => {
    return (
        <ListItemStyles>
            <Average average={+average}>{average}</Average>
            <DetailStyles>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </DetailStyles>
            <Button>
                <DeleteIcon />
            </Button>
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
