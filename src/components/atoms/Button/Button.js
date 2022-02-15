import styled from 'styled-components';

const Button = styled.button`
    padding: ${({ isBig }) => (isBig ? '7px 38px' : '7px 20px')};
    border: none;
    border-radius: 96px;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
`;

export default Button;
