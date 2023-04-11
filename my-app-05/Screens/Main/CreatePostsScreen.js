import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Text, View, Alert, Image, TextInput, Platform, TouchableOpacity,
  KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";

const initialState = {
  id: "",
  name: "",
  address: "",
  coordinate: {},
  uri: "",
};

const CreatePostsScreen = ({ navigation, route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const imageHandler = () => navigation.navigate("CreatePhoto");
  const nameHandler = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const addressHandler = (value) =>
    setState((prevState) => ({ ...prevState, address: value }));
  const handleSubmit = () => {
    Keyboard.dismiss();
    navigation.navigate("PostsScreen", { ...state });
    setState(initialState);
  };
  useEffect(() => {
    if (route.params) {
      setState((prevState) => ({ ...prevState, ...route.params }));
      GetCurrentLocation();
    }
  }, [route.params]);

  const GetCurrentLocation = async () => {
    let permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      setState((prevState) => ({
        ...prevState,
        coordinate: { latitude, longitude },
      }));
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const { country, city, subregion } = response[0];
      setState((prevState) => ({
        ...prevState,
        address: `${country}, ${city ? city : subregion}`,
      }));
    }
  };
  const chengIsShowKeyboard = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleDel = () => setState(initialState);
  const { name, address,
    uri
    } = state;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        {uri ? (
          <Image source={{ uri }} style={styles.imageBox} />
        ) : (
          <View
            style={{ ...styles.imageBox, marginTop: isShowKeyboard ? -32 : 32 }}
          >
            <TouchableOpacity
              style={styles.cameraButton}
              activeOpacity={0.8}
              onPress={imageHandler}
            >
              <Feather name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.text}>Upload a photo</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={nameHandler}
            onFocus={chengIsShowKeyboard}
            placeholder="Name..."
            autoCapitalize="none"
          />
          <View style={styles.locationField}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            <TextInput
              style={{ ...styles.input, ...styles.locationInput }}
              onChangeText={addressHandler}
              onFocus={chengIsShowKeyboard}
              placeholder="Location..."
              autoCapitalize="none"
              value={address}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.btnTrashBox}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnTrash}
            onPress={handleDel}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
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
  cameraButton: {
    width: 60,
    height: 60,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  text: {
    color: "#BDBDBD",
    textAlign: "left",
    marginTop: 8,
    fontSize: 16,
    // fontFamily: "Roboto-Regular",
  },
  inputBlock: {
    marginVertical: 32,
    gap: 16,
  },

  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 16,
    color: "#212121",
    fontSize: 16,
    // fontFamily: "Roboto-Regular",
  },
  locationInput: {
    paddingLeft: 28,
  },

  locationField: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  locationIcon: {
    position: "absolute",
    left: 0,
    marginRight: 4,
  },

  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#FFFFFF",
    paddingVertical: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
  },

  btnTrashBox: {
    position: "absolute",
    width: "100%",
    bottom: 34,
    left: 15,
    alignItems: "center",
  },

  btnTrash: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostsScreen;