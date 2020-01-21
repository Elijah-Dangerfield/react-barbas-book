import React from "react";
import styled from "styled-components";

interface Source {
  id: string;
  name: string;
}
interface ArticleProps {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const ArticleCell = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content
}: ArticleProps) => (
  <Container>
    <Image
      source={{
        uri: urlToImage
      }}
    ></Image>
    <DetailsWrapper>
      <Title>{title}</Title>
      <Details>{description.substr(0, 150) + "..."}</Details>
    </DetailsWrapper>
  </Container>
);

export default ArticleCell;

const Container = styled.View`
  background: white;
  height: 200px;
  margin: 10px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  flex-direction: row;
`;

const Image = styled.Image`
  height: 150px;
  width: 100px;
  margin: auto 0;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`;

const DetailsWrapper = styled.View`
  flex: 1;
  margin-left: 10px;
`;
const Details = styled.Text``;
