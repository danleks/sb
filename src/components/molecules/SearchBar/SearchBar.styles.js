import styled from 'styled-components';

export const SeachBarStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 45px;
    grid-column: 2 / 3;
    grid-row: 1 / 1;
    padding-left: 38px;
    border-bottom: 1px solid #dfe2e8;

    & input {
        width: 100%;
        max-width: 350px;
        padding: 12px 28px;
        box-shadow: -2px 4px 10px 0px #737c8e17;
        border: none;
        font-size: ${({ theme }) => theme.fontSize.m};
        color: #c2cbdf;
    }
`;

export const SearchBarStatus = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.darkGrey};
    letter-spacing: -0.5px;

    & > span:first-child {
        font-size: ${({ theme }) => theme.fontSize.s};
    }

    & > span:last-child {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
    }
`;
