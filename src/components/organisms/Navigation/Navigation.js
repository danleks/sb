import React from 'react';
import { Link } from 'react-router-dom';

import { LogoStyles, NavigationListStyles, NavigationStyles, StyledLink } from './Navigation.styles';

const Navigation = () => {
    return (
        <NavigationStyles>
            <LogoStyles>
                <span>
                    Study <br />
                    Buddy
                </span>
            </LogoStyles>
            <NavigationListStyles>
                <li>
                    <StyledLink to="/add-user">add user</StyledLink>
                </li>
                <li>
                    <StyledLink exact to="/">
                        users
                    </StyledLink>
                </li>
            </NavigationListStyles>
        </NavigationStyles>
    );
};

export default Navigation;
