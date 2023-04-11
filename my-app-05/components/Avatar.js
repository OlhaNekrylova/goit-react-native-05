import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Avatar = () => {
    return (
        <View style={styles.add}>
            <TouchableOpacity style={styles.addBtn}>
                <Feather name="plus" size={13} color="#FF6C00" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    add: {
        position: "absolute",
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    addBtn: {
        position: "absolute",
        bottom: 14,
        right: -12,
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 50,
    },
});

export default Avatar;