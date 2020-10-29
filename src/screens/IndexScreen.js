import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { addPost, deletePost } from "../actions/blogAction";
import { useBlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const [state, dispatch] = useBlogContext();

  const lastId = state?.blogs[0]?.id;
  const mockId = lastId ? +lastId + 1 : 1;

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="ADD POST"
        onPress={() =>
          addPost(dispatch, { id: `${mockId}`, title: `Blog Post #${mockId}` })
        }
      />

      <FlatList
        data={state.blogs}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
          >
            <View style={styles.row}>
              <Text>{item?.title}</Text>
              <TouchableOpacity
                onPress={() => deletePost(dispatch, { id: item.id })}
              >
                <FontAwesome name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 24,
    color: "#000",
  },
});

export default IndexScreen;
