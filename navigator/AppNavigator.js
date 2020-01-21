import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ArticleFeedScreen from "../screens/ArticleFeed";
import ArticleDetailScreen from "../screens/ArticleDetail";

const MainNavigator = createStackNavigator({
  Feed: { screen: ArticleFeedScreen },
  Detail: { screen: ArticleDetailScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
