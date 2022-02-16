import styled from 'styled-components';

export const InputStyles = styled.input`
    width: 200px;
    padding: 5px 8px;
    border-radius: 25px;
    border: none;
    border: 1px solid ${({ theme }) => theme.colors.grey};

    &:not(:placeholder-shown) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        outline: none;
    }
`;
