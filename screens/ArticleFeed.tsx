import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCell from "../components/ArticleCell";
import { TouchableOpacity, FlatList } from "react-native";
import { ArticleProps } from "../components/ArticleCell";
import { api, ApiResponse } from "../functions/api";

const ArticleFeed = props => {
  const [apiResults, setApiResults] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    api<ApiResponse>(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0cec05e663864f78867ef7af73988cc2"
    )
      .then((response: ApiResponse) => {
        setApiResults(response.articles);
      })
      .catch(error => {
        /* show error message */
        console.log("API ERROR");
      });
  }

  return (
    <Container>
      <FlatList<ArticleProps>
        data={apiResults}
        renderItem={({ item, index }) =>
          renderArticleCell(index, item, () => {
            props.navigation.push("Detail", { article: item });
          })
        }
      />
    </Container>
  );
};

function renderArticleCell(
  idx: number,
  article: ArticleProps,
  onPress: () => void
): JSX.Element {
  return (
    <TouchableOpacity key={idx} onPress={() => onPress()}>
      <ArticleCell
        source={article.source}
        author={article.author}
        title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        publishedAt={article.publishedAt}
        content={article.content}
      />
    </TouchableOpacity>
  );
}

export default ArticleFeed;
const Container = styled.View`
  background: white;
  flex: 1;
`;
