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

export const SearchBarContent = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 350px;
`;

export const SeachBarResults = styled.ul`
    position: absolute;
    list-style: none;
    background: #fff;
    width: 350px;
    top: 58px;
    display: flex;
    flex-direction: column;
    gap: 11px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 1;
    box-shadow: -2px 4px 10px 0px #737c8e17;

    li {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
        padding: 10px 26px;

        &:hover {
            background-color: #eceff6;
        }
    }
`;
