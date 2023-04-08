import React, { useState, useEffect } from "react";
import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";

const initialState = {
  name: "",
  location: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

  const publishPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    <View>
    <TextInput 
        style={{...styles.input,
        marginTop: isShowKeyboard ? 0 : 16, 
        top: isShowKeyboard ? -190 : 0,}} 
        placeholder="Name"
        inputMode="text"
        onFocus={() => setIsShowKeyboard(true)}
        value={ state.name }
        onChangeText={(value) =>
        setState((prevState) => ({ ...prevState, name: value }))}
    />
    <TextInput 
        style={{...styles.input,
        marginTop: isShowKeyboard ? 0 : 16, 
        top: isShowKeyboard ? -190 : 0,}} 
        placeholder="Location"
        inputMode="text"
        onFocus={() => setIsShowKeyboard(true)}
        value={ state.location }
        onChangeText={(value) =>
        setState((prevState) => ({ ...prevState, location: value }))}
    />
        <TouchableOpacity 
          onPress={publishPhoto}
          style={styles.publishBtn} 
          activeOpacity={0.5}>
          <Text style={styles.publishLabel}>Publish</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={ styles.deleteButton } 
              activeOpacity={0.5} 
        >
          <Text style={ styles.deleteButtonText }>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "30%",
    marginHorizontal: 2,
    marginTop: 70,
    borderRadius: 10,
    backgroundColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 32,
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    width: 343,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },
  publishBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 51,
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    shadowColor: "#000000",
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  publishLabel: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 19,
  },
  deleteButton: {
    backgroundColor: '#BDBDBD',
    height: 40,
    width: 70, 
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default CreatePostsScreen;