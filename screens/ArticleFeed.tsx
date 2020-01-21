import React from "react";
import styled from "styled-components";
import ArticleCell from "../components/ArticleCell";
import { TouchableOpacity } from "react-native";

const ArticleFeed = props => {
  return (
    <Container>
      <TouchableOpacity onPress={() => props.navigation.push("Detail")}>
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
    </Container>
  );
};

export default ArticleFeed;
const Container = styled.View``;
const Text = styled.Text``;

const article = {
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
};
