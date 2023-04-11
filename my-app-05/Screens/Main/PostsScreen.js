import React, { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import data from "../../assets/data";
import PostsCard from "../../components/PostsCards";
import UserCard from "../../components/UserCard";

const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    route.params && setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  const mapView = (coordinate) => {
    navigation.navigate("Map", 
    coordinate
    );
  };
  const commentView = (id, uri) => {
    navigation.navigate("Comments",
    { id, uri }
  );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          <UserCard />
          {posts.map(({ id, name, address, 
          coordinate, uri 
        }) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  list: {
    flex: 1,
    display: "flex",
    marginVertical: 32,
    flexDirection: "column",
    gap: 32,
  },
});

export default PostsScreen;