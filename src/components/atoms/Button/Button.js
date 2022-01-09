import styled from 'styled-components';

const Button = styled.button`
    padding: 5px 15px;
    border: none;
    border-radius: 96px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
`;

export default Button;
