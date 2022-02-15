import axios from 'axios';
import Button from 'components/atoms/Button/Button';
import React, { useEffect, useState } from 'react';

import { ArticleWrapper, ContentWrapper, NewsStyles, NewsTitle, TitleWrapper } from './News.styles';

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const News = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function getArticles() {
            const endpoint = 'https://graphql.datocms.com/';
            const headers = {
                authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
            };
            try {
                const {
                    data: { data },
                } = await axios({
                    method: 'post',
                    url: endpoint,
                    data: { query },
                    headers,
                });
                setArticles(data.allArticles);
            } catch {
                setError(true);
            }
        }
        getArticles();
    }, []);
    return (
        <NewsStyles>
            <NewsTitle>University news feed</NewsTitle>
            {articles.length > 0
                ? articles.map(({ id, title, category, image = null, content }) => (
                      <ArticleWrapper key={id}>
                          <TitleWrapper>
                              <h3>{title}</h3>
                              <span>{category}</span>
                          </TitleWrapper>
                          <ContentWrapper>
                              <p>{content}</p>
                              {image ? <img src={image.url} alt={title} /> : null}
                          </ContentWrapper>
                          <Button isBig>Read more</Button>
                      </ArticleWrapper>
                  ))
                : error
                ? 'Cannot load articles'
                : 'Loading...'}
        </NewsStyles>
    );
};

export default News;
