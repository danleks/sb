import styled from 'styled-components';

const Label = styled.label`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export default Label;
