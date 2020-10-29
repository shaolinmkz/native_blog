import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useBlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const [state] = useBlogContext();
  const id = navigation.getParam('id')

  const post = state.blogs.find(({ id: blogId }) => blogId === id)

  return (
    <View>
      <Text>{post?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ShowScreen;
