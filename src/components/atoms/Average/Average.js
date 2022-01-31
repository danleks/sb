import styled from 'styled-components';

export const Average = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, average }) => {
        if (average > 4) return theme.colors.success;
        if (average > 3) return theme.colors.warning;
        if (average > 2) return theme.colors.error;
        return theme.colors.grey;
    }};
`;
