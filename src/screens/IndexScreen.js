import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { deletePost, getPosts } from "../actions/blogAction";
import { useBlogContext } from "../context/BlogContext";

const IndexScreen = ({ navigation }) => {
  const [state, dispatch] = useBlogContext();
  const [pageLoading, setPageLoading] = useState(true);
  const [deleting, setDeleting] = useState({ isDeleting: false, id: "" });

  const handleDelete = (id) => {
    setDeleting({ id, isDeleting: true });
    deletePost(dispatch, { id }).then(() =>
    setDeleting({ id: "", isDeleting: false })
    );
  };

  useEffect(() => {
    getPosts(dispatch).then(() => {
      setPageLoading(false);
    });

    navigation.addListener("didFocus", () => {
      getPosts(dispatch);
    });
  }, []);

  return pageLoading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Feather name="loader" size={100} color="black" />
    </View>
  ) : (
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
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                {deleting.id === item.id && deleting.isDeleting ? (
                  <Feather name="loader" style={styles.icon} />
                ) : (
                  <FontAwesome name="trash" style={styles.icon} />
                )}
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
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateScreen")}
        style={{ marginRight: 10 }}
      >
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

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
    textTransform: "capitalize",
  },
});

export default IndexScreen;
