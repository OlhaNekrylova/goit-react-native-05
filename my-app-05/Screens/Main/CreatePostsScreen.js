import React, { useState, useEffect } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
// import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { Feather, FontAwesome } from '@expo/vector-icons';

// const initialState = {
//   title: "",
//   place: "",
// };

const CreatePostsScreen = ({ route, navigation }) => {
  // const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  const [inputRegion, setInputRegion] = useState('')
  const [title, setTitle] = useState('');

  const active = title && region;

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }   

      Location.getCurrentPositionAsync({}).then((locationPos) =>{
        const coords = {
          latitude: locationPos.coords.latitude,
          longitude: locationPos.coords.longitude,
        };
        setLocation(coords);
        return coords;
      }).then((coords)=>{
        return Location.reverseGeocodeAsync(coords)
      }).then((regionName)=> setRegion(regionName)).catch();

    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    // const location = await Location.getCurrentPositionAsync();
    // console.log("latitude", location.coords.latitude);
    // console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    console.log("photo", photo);
    setInputRegion(region[0]['country'] + ", " + region[0]['city']); 
  };

  const publishPhoto = () => {
    if (!title || !location || !photo) { alert("Enter all data, please!"); return }
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo, location, title, inputRegion });
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 220, width: 220, marginTop: -80 }}
            />
          </View>
        </Camera>
        <TouchableOpacity 
          style={styles.snapContainer}
          onPress={takePhoto} 
          activeOpacity={0.1}
        >
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
      
      <Text style={ styles.postImgText }>Upload a photo</Text>
    <View style={ styles.postForm }>
    <TextInput 
        style={ styles.input } 
        placeholder="Title"
        inputMode="text"
        onFocus={() => setIsShowKeyboard(true)}
        value={ title }
        onChangeText={(value) =>
        setTitle((prevTitle) => ({ ...prevTitle, title: value }))}
    />
    <View style={styles.placeField}>
      <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.placeIcon}
            />
      <TextInput 
        style={ styles.placeInput } 
        placeholder="Location"
        inputMode="text"
        onFocus={() => setIsShowKeyboard(true)}
        value={ inputRegion }
        onChangeText={(value) =>
        setInputRegion((prevInputRegion) => ({ ...prevInputRegion, inputRegion: value }))}
      />
    </View>
        <TouchableOpacity 
          onPress={publishPhoto}
          style={active?styles.publishBtnActive:styles.publishBtn} 
          activeOpacity={0.5}>
          <Text style={active?styles.publishLabelActive:styles.publishLabel}>Publish</Text>
        </TouchableOpacity>
        </View>
        <View style={ styles.deletePost }>
        <TouchableOpacity
              style={ styles.deleteButton } 
              activeOpacity={0.5} 
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        </View>
        
        {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    flex: 1,
    justifyContent: "center",
      alignItems: "center", 
      backgroundColor: "#fff",
  },
  camera: {
      // flex: 3,
      width: '100%',
      height: 240,
      marginTop: 32,
      color: '#F6F6F6',
      backgroundColor: "#F6F6F6",
      // justifyContent: "center",
      // alignItems: "center",
      
    //   width: "100%",
    // height: 240,
    // marginTop: 32,
    // justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "#E8E8E8",
    // borderRadius: 8,
    // backgroundColor: "#F6F6F6",
  },
  snapContainer: {
    // position: "absolute",
    // top: 150,
  //   left: 10,
    display: 'flex',
      marginTop: -80,
      width: 60,
    height: 60,
      borderRadius: 50,
      // padding: 3,
      backgroundColor: '#E8E8E8',
      borderColor: '#ffffff',
      // borderWidth: 2,
      alignItems: 'center',
      justifyContent: "center"
  },
  postImgText: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    fontSize: 16,
    color: "#BDBDBD"
},
  postForm:{
    marginVertical: 32,
    gap: 16,
},
  input: {
    width: 343,
    height: 50,
    marginTop: 32,
    // paddingVertical: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
  },
  placeInput: {
    width: 343,
    height: 50,
    marginTop: 32,
    // paddingVertical: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
    paddingLeft: 30,
  },

  placeField: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  placeIcon: {
    position: "absolute",
    left: 0,
    top: 45,
    marginRight: 4,
  },
  publishBtn:{
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 32,
  },
  publishBtnActive: {
    backgroundColor: '#FF6C00',
    width: 343,
    height: 51, 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 32,
  },
  publishLabel: {
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
  },
  publishLabelActive: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
  },
  // deletePost: {
  //   position: "absolute",
  //   width: "100%",
  //   bottom: 34,
  //   left: 15,
  //   alignItems: "center",
  // },
  deleteButton: {
    backgroundColor: '#F6F6F6',
    height: 40,
    width: 70, 
    // marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    // marginBottom: 20,
  },
});

export default CreatePostsScreen;