import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { addPost } from "../actions/blogAction";
import { useBlogContext } from "../context/BlogContext";


export default ({ navigation }) => {
  const [post, setPost] =  useState({
    content: '',
    title: ''
  });

  const [state, dispatch] = useBlogContext();

  const lastId = state?.blogs[0]?.id;
  const newId = lastId ? +lastId + 1 : 1;

  const handleChange = ({ name, value }) => {
    setPost(prevState => ({ ...prevState, [name]: value }))
  };

  const handleSubmit = () => {
    if(post.title && post.content) {
      addPost(dispatch, { id: `${newId}`, ...post });
      navigation.navigate('IndexScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput style={styles.input} onChangeText={(value) => handleChange({ name: 'title', value })} value={post.title} />
      <Text style={styles.label}>Enter context:</Text>
      <TextInput style={styles.input} onChangeText={(value) => handleChange({ name: 'content', value })} value={post.content} />
      <Button
        title={(post.title && post.content) ? "SUBMIT POST" : "DISABLED"}
        onPress={handleSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flex: 1,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: 'grey'
  },
});
