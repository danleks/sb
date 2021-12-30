import styled from 'styled-components';

export const ListItemStyles = styled.li`
    position: relative;
    display: flex;
    padding: 2rem 0;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.lightPurple};
    }
`;

export const DetailStyles = styled.div`
    padding: 0 1.4rem 0 2.4rem;
    p {
        color: ${({ theme }) => theme.colors.darkGrey};

        &:first-child {
            font-weight: 700;
            font-size: ${({ theme }) => theme.fontSize.l};
        }
        &:last-child {
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }
`;
