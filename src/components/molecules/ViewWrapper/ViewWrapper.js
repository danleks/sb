import styled from 'styled-components';

export const ViewWrapper = styled.div`
    width: 100%;
    max-width: 50rem;
    padding: 6rem 6rem 3rem 4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
`;

export default ViewWrapper;
