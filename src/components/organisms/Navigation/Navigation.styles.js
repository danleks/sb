import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyles = styled.nav`
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

export const StyledLink = styled(NavLink)`
    position: relative;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;

    &.active::after {
        opacity: 1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -24px;
        width: 20px;
        height: 3px;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors.darkPurple};
        opacity: 0;
        transition: 0.1s opacity ease-in;
    }
`;
