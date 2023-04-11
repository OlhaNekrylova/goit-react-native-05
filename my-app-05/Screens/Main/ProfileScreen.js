import React from "react";
import { useLinkTo } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Container from "../../components/Container";
import Avatar from "../../components/Avatar";
import HeaderButton from "../../components/Button";
import PostsCard from "../../components/PostsCards";
import data from "../../assets/data";

const ProfileScreen = ({ navigation }) => {
  const linkTo = useLinkTo();

  const mapView = (coordinate) => {
    navigation.navigate("Map", coordinate);
  };
  const commentView = (id, uri) => {
    navigation.navigate("Comments", { id, uri });
  };

  return (
    <Container>
      <Avatar />
      <View style={styles.logOut}>
        <HeaderButton name={"log-out"} onPress={() => linkTo("/Login")} />
      </View>
      <Text style={styles.profileTitle}>Natali Romanova</Text>
      <View style={styles.list}>
        {data.map(({ id, name, address, coordinate, uri }) => (
          <PostsCard
            key={id}
            id={id}
            name={name}
            address={address}
            coordinate={coordinate}
            uri={uri}
            mapClick={mapView}
            commentClick={commentView}
          />
        ))}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  profileTitle: {
    textAlign: "center",
    color: "#212121",
    marginTop: 92,
    // fontFamily: "Roboto-Bold",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  list: {
    flex: 1,
    width: "100%",
    display: "flex",
    marginVertical: 32,
    flexDirection: "column",
    gap: 32,
  },
});

export default ProfileScreen;