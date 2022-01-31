import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 109px 1fr;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.lightGrey};
`;
