import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import BlogContextProvider from './src/context/BlogContext';

const navigator = createStackNavigator({
  IndexScreen,
  ShowScreen,
  CreateScreen,
  EditScreen,
},
{
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

const App = createAppContainer(navigator);

export default () => (
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
)
