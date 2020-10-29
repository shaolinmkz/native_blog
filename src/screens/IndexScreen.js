import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { deletePost } from "../actions/blogAction";
import { useBlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const [state, dispatch] = useBlogContext();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={state.blogs}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowScreen", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item?.title}</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')} style={{ marginRight: 10 }}>
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
    fontSize: 28,
    color: "#000",
  },
  title: {
    textTransform: 'capitalize'
  },
});

export default IndexScreen;
