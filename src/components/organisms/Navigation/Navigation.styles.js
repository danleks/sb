import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyles = styled.nav`
    position: absolute;
    left: 0;
    top: 0;
    width: 109px;
    height: 100%;
    border-right: 1px solid #dfe2e8;
`;

export const LogoStyles = styled.div`
    padding: 13px 0 13px 40px;
    margin-top: 19px;
    background-color: ${({ theme }) => theme.colors.darkGrey};

    span {
        font-size: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        color: white;
    }
`;

export const NavigationListStyles = styled.ul`
    margin-top: 47px;
    list-style: none;
    text-align: right;

    li {
        padding-right: 24px;
    }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName: 'active' })`
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;

    .active {
        color: red;
    }
`;
