import { Feather } from "@expo/vector-icons";
import { Text, View, Image, StyleSheet } from "react-native";

const PostsCard = ({
  id,
  name,
  address,
  coordinate,
  uri,
  mapClick,
  commentClick,
}) => {
  return (
    <View>
      <View style={styles.imageBox}>
        <Image style={styles.image} 
        source={{ uri }} 
        />
      </View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.detailsBox}>
        <View style={styles.activityBox}>
          <View style={styles.activity}>
            <Text onPress={() => commentClick(id, uri)}>
              <Feather name="message-circle" size={24} color="#BDBDBD" />
            </Text>
            <Text>0</Text>
          </View>
          <View style={styles.activity}>
            <Feather name="thumbs-up" size={24} color="#BDBDBD" />
            <Text>0</Text>
          </View>
        </View>
        <Text style={styles.location}
          onPress={() => mapClick(coordinate)}
        >
          <Feather
            style={styles.icon}
            name="map-pin"
            size={24}
            color="#BDBDBD"
          />
          <Text>{address}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    imageBox: {
      width: "100%",
      height: 240,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderRadius: 8,
      backgroundColor: "#F6F6F6",
      // fontFamily: "Roboto-Regular",
      fontSize: 16,
      color: "#212121",
    },
    image: {
      flex: 1,
      width: "100%",
      borderRadius: 8,
      resizeMode: "cover",
    },
    detailsBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    activityBox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
    },
    activity: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 6,
    },
    location: {
      display: "flex",
      textAlign: "right",
      alignItems: "center",
      marginLeft: 4,
    },
    icon: {
      marginRight: 4,
    },
    title: {
      textAlign: "left",
      marginVertical: 8,
      fontWeight: 500,
      fontSize: 16,
      // fontFamily: "Roboto-Bold",
    },
  });
  

export default PostsCard;