import ViewWrapper from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const NewsStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    grid-column: 3 / 3;
    grid-row: 1 / 3;
    padding: 0 45px;
    border-left: 1px solid #dfe2e8;
    padding-top: 30px;
    overflow: scroll;
`;

export const NewsTitle = styled.h2`
    padding-bottom: 16px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
    max-width: unset;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
    h3 {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 700;
        line-height: 0.7;
    }

    span {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    p {
        font-size: ${({ theme }) => theme.fontSize.s};
        line-height: 1.6;
        padding-top: 12px;
        padding-bottom: 37px;
    }

    img {
        max-width: 200px;
        object-fit: cover;
    }
`;
