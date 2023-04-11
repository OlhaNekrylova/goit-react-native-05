import { View, ImageBackground, Dimensions, ScrollView, SafeAreaView, 
    StyleSheet } from "react-native";
    
const { height, width } = Dimensions.get("window");

const Container = ({ children }) => {
    return (
        <ImageBackground
            style={styles.image}
            source={require("../assets/images/Photo-image.jpg")}
        >
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.box}>{children}</View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        // fontFamily: "Roboto-Regular",
    },
    image: {
        width: width,
        height: height,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    scroll: {
        flex: 1,
    },
    box: {
        position: "relative",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        marginTop: 120,
    },
});

export default Container;