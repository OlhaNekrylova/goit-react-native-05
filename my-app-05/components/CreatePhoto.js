import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect, useRef } from "react";
import { Feather } from "@expo/vector-icons";
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet
  } from "react-native";

const CreatePhoto = ({ navigation }) => {
    const [camera, setCamera] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    
    const takePhoto = async () => {
        const { uri } = await camera.takePictureAsync();
        navigation.navigate("CreatePostsScreen", { uri } );
    };

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }    
    if (!permission ) return <View />;
    if (!permission.granted ) {
        return (
        <View style={styles.container}>
            <View style={styles.permission}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
        </View>
      </View>
    );
    }
    
      return (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            ref={setCamera}
          >
            <View style={styles.photoView}>
            <View style={styles.buttonsBox}>
            <TouchableOpacity
                style={styles.takeContainer}
                onPress={takePhoto}
              >    
            <Feather name="circle" size={48} color="#FFFFFF" />
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.flipContainer}
                onPress={toggleCameraType}
              >
                <Feather name="refresh-cw" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            </View>
          </Camera>
        </View>
      );    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    permission: {
      alignSelf: "center",
      gap: 20,
    },
  
    camera: {
      flex: 1,
    },
    photoView: {
      flex: 1,
      resizeMode: "contain",
      backgroundColor: "transparent",
      justifyContent: "flex-end",
    },
    buttonsBox: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      height: 48,
      marginBottom: 100,
      alignItems: "center",
    },
  
    takeContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  
    flipContainer: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      left: 50,
      top: 12,
    },
  });

export default CreatePhoto;