import React from "react";
import { Linking, ScrollView } from "react-native";
import styled from "styled-components";
import { ArticleProps } from "../components/ArticleCell";
import Moment from "moment";

const ArticleDetail = props => {
  const article: ArticleProps = props.navigation.state.params.article;
  Moment.locale("en");
  const date = Moment(article.publishedAt).format("d, MMM YYYY");
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Image
          source={{
            uri: article.urlToImage
          }}
        />
        <DetailsWrapper>
          <Author>{article.author}</Author>
          <Date>{date}</Date>
        </DetailsWrapper>
        <ArticleContentWrapper>
          <ArticleDescription>{article.description}</ArticleDescription>
          <ArticleText>{article.content}</ArticleText>
          <ArticleText>Read the full Article here:</ArticleText>
          <ArticleText
            style={{ color: "blue" }}
            onPress={() => Linking.openURL(article.url)}
          >
            {article.url}
          </ArticleText>
        </ArticleContentWrapper>
      </Container>
    </ScrollView>
  );
};

export default ArticleDetail;

const Container = styled.View`
  flex: 1;
`;

const LinkWrapper = styled.View``;

const Image = styled.Image`
  height: 200px;
`;

const Author = styled.Text`
  font-weight: 400;
`;
const ArticleContentWrapper = styled.View`
  padding: 0 20px;
`;

const ArticleDescription = styled.Text`
  font-weight: 400;
  margin-top: 20px;
  line-height: 22px;
  font-size: 14px;
`;
const ArticleText = styled.Text`
  font-weight: 400;
  margin-top: 20px;
  line-height: 22px;
  font-size: 14px;
`;
const Date = styled.Text`
  color: rgba(0, 0, 0, 0.5);
`;
const DetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;
