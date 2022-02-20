import React from 'react';

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
                    <StyledLink to="/group">users</StyledLink>
                </li>
                {/* <li>
                    <StyledLink to="/add-user">add user</StyledLink>
                </li> */}
            </NavigationListStyles>
        </NavigationStyles>
    );
};

export default Navigation;
