import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useBlogContext } from "../context/BlogContext";
import { getPost } from "../actions/blogAction";

const ShowScreen = ({ navigation }) => {
  const [state, dispatch] = useBlogContext();
  const [pageLoading, setPageLoading] = useState(true);
  const id = navigation.getParam('id')

  const { singlePost } = state;

  useEffect(() => {
    setPageLoading(true)
    getPost(dispatch, id)
    .then(() => {
      setPageLoading(false)
    });

    const listenerRef = navigation.addListener("didFocus", () => {
      getPost(dispatch, id);
    });

    return () => {
      listenerRef.remove();
    }
  }, [])

  return pageLoading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Feather name="loader" size={100} color="black" />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>{singlePost?.title}</Text>
      <Text style={styles.content}>{singlePost?.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id })} style={{ marginRight: 10 }}>
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
