import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { addPost, deletePost } from "../actions/blogAction";
import { useBlogContext } from "../context/BlogContext";

function IndexScreen() {
  const [state, dispatch] = useBlogContext();

  const mockId = state?.blogs?.length + 1;

  return (
    <View style={{ flex: 1 }}>
      <Button
        title={`ADD POST #${mockId}`}
        onPress={() =>
          addPost(dispatch, { id: `${mockId}`, title: `Blog Post #${mockId}` })
        }
      />
      {!!state?.blogs?.length && (
        <Button
          title={`DELETE POST #${mockId - 1}`}
          onPress={() =>
            deletePost(dispatch, {
              id: `${mockId - 1}`,
              title: `Blog Post #${mockId - 1}`,
            })
          }
        />
      )}
      <FlatList
        data={state.blogs}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Text>{item?.title}</Text>}
      />
    </View>
  );
}

export default IndexScreen;
