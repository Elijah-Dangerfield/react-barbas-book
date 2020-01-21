import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArticleCell from "../components/ArticleCell";
import { TouchableOpacity, FlatList } from "react-native";
import { ArticleProps } from "../components/ArticleCell";
import { api } from "../functions/api";

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: ArticleProps[];
}
const ArticleFeed = props => {
  const [apiResults, setApiResults] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <FlatList<ArticleProps>
        data={apiResults}
        renderItem={({ item, index }) =>
          renderArticleCell(index, item, () => {
            props.navigation.push("Detail");
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

const articles: ArticleProps[] = [
  {
    source: {
      id: "mashable",
      name: "Mashable"
    },
    author: "Stan Schroeder",
    title: "Bitcoin whale moves $1.1 billion in bitcoins for an $80 fee",
    description:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing…",
    url: "https://mashable.com/article/bitcoin-1-1-billion-transaction/",
    urlToImage:
      "https://mondrian.mashable.com/2020%252F01%252F15%252F38%252Fd26e834787934c56a33fdeb39faa0be8.84e34.jpg%252F1200x630.jpg?signature=IHj6xz7nTFxvmjn6XOvUiHKJCIM=",
    publishedAt: "2020-01-15T09:10:59Z",
    content:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing… [+1589 chars]"
  },
  {
    source: {
      id: "mashable",
      name: "Mashable"
    },
    author: "Stan Schroeder",
    title: "Bitcoin whale moves $1.1 billion in bitcoins for an $80 fee",
    description:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing…",
    url: "https://mashable.com/article/bitcoin-1-1-billion-transaction/",
    urlToImage:
      "https://mondrian.mashable.com/2020%252F01%252F15%252F38%252Fd26e834787934c56a33fdeb39faa0be8.84e34.jpg%252F1200x630.jpg?signature=IHj6xz7nTFxvmjn6XOvUiHKJCIM=",
    publishedAt: "2020-01-15T09:10:59Z",
    content:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing… [+1589 chars]"
  },
  {
    source: {
      id: "mashable",
      name: "Mashable"
    },
    author: "Stan Schroeder",
    title: "Bitcoin whale moves $1.1 billion in bitcoins for an $80 fee",
    description:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing…",
    url: "https://mashable.com/article/bitcoin-1-1-billion-transaction/",
    urlToImage:
      "https://mondrian.mashable.com/2020%252F01%252F15%252F38%252Fd26e834787934c56a33fdeb39faa0be8.84e34.jpg%252F1200x630.jpg?signature=IHj6xz7nTFxvmjn6XOvUiHKJCIM=",
    publishedAt: "2020-01-15T09:10:59Z",
    content:
      "Bitcoin hasn't (yet) fulfilled its original promise of being widely-used electronic cash, but it still offers some features that would be hard to achieve within the traditional banking system. Namely, moving $1.1 billion from one address to another, in a sing… [+1589 chars]"
  }
];
