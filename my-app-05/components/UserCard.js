import { View, Text, Image, StyleSheet } from "react-native";

const UserCard = () => {
  return (
    <View style={styles.user}>
      <Image
        style={styles.image}
        source={require("../assets/images/Rectangle-22.png")}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    user: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
  gap: 8,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 16,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      color: "#212121CC",
    },
    name: {
    //   fontFamily: "Roboto-Bold",
      // lineHeight: 15,
      fontWeight: 700,
      fontSize: 24,
      // fontSize: 13,
    },
    email: {
    //   fontFamily: "Roboto-Regular",
      // lineHeight: 13,
      fontSize: 18,
      // fontSize: 11,
    },
  });
  

export default UserCard;