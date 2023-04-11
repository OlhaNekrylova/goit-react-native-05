import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity,
  SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const CommentsScreen = ({
  navigation,
  route: {
    params: { id, uri },
  },
}) => {
  const [comment, setComment] = useState("");
  const commentHandler = (value) => setComment(value);
  const handleSend = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri }} />
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.item}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={require("../../assets/images/Ellipse.jpg")}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.coment}>
                Really love your most recent photo. Ive been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.data}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={commentHandler}
          placeholder="Comment..."
          value={comment}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnSend}
          onPress={handleSend}
        >
          <Feather name="arrow-up" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    // fontFamily: "Roboto-Regular",
    justifyContent: "space-between",
  },
  imageBox: {
    width: "100%",
    height: 240,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },

  image: {
    flex: 1,
    width: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
  list: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginVertical: 32,
    gap: 24,
  },
  item: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  avatar: {
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 50,
  },
  avatarBox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  textBox: {
    width: "90%",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  coment: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    textAlign: "left",
  },

  data: {
    color: "#BDBDBD",
    textAlign: "right",
    marginTop: 8,
    fontSize: 10,
    lineHeight: 12,
  },
  inputBox: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  input: {
    width: "100%",
    height: 59,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 50,
    borderRadius: 100,
    color: "#212121",
    fontSize: 16,
  },
  btnSend: {
    position: "absolute",
    width: 34,
    height: 34,
    right: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default CommentsScreen;
