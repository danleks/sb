import styled from 'styled-components';

export const DashboardStyles = styled.div`
    display: flex;
    flex-direction: column;

    nav {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        gap: 20px;
    }

    nav span {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
    }

    nav ul {
        display: flex;
        gap: 20px;
        list-style: none;
    }

    nav ul a {
        color: ${({ theme }) => theme.colors.darkGrey};
        text-decoration: none;
        border-radius: 50%;
        background-color: white;
        padding: 4px 8px;
    }
`;
