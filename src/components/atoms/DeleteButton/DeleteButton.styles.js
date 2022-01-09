import styled from 'styled-components';

export const ButtonStyles = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.colors.darkPurple};
    cursor: pointer;

    svg {
        width: 100%;
    }
`;
