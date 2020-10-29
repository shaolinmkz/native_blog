import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useBlogContext } from "../context/BlogContext";


export default ({ navigation }) => {
  const [state, dispatch] = useBlogContext();

  return (
    <View>
      <Text>Create screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
