import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useBlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const [state] = useBlogContext();
  const id = navigation.getParam('id')

  const post = state.blogs.find(({ id: blogId }) => blogId === id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post?.title}</Text>
      <Text style={styles.content}>{post?.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen', { id })} style={{ marginRight: 10 }}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  content: {
    fontSize: 14,
  },
});

export default ShowScreen;
