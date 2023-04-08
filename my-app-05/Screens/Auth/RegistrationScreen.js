import { StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Keyboard,TouchableWithoutFeedback, 
    Platform } from "react-native";
import React, { useState } from "react";

const imageBackground = require('../../assets/images/Photo-image.jpg');

const buttonImg = require('../../assets/images/add.png');

const initialState = {
    login: "",
    email: "",
    password: "",
};

const RegistrationScreen = ({ navigation }) => {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        // setstate(initialState);
    };

    const onSubmit = () => {
        if (!state.login || !state.email || !state.password) { alert("Enter all data, please!"); return }
        // setIsShowKeyboard(false);
        // Keyboard.dismiss();
        console.log(state);
        // setstate(initialState);
        navigation.navigate('Home', { screen: 'PostsScreen' });
    }

    const passwordShow =()=> alert(`Your password is: ${state.password}`);

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground source={imageBackground} style={styles.imageBackground} >
                    <KeyboardAvoidingView 
                        behavior={Platform.OS == "ios" ? "padding" : "height"} 
                    >
                        <View style={{...styles.form,
                            bottom: isShowKeyboard ? -180 : 0, }}>
                            <View style={ {...styles.pfotoContainer,
                                top: isShowKeyboard ? -230 : -60, }}>
                                <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
                                    <ImageBackground source={buttonImg} style={{width: '100%', height: '100%'}}></ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <Text style={ {...styles.title,
                                top: isShowKeyboard ? -190 : 0, } }>Registration</Text>
                            <TextInput 
                                style={{...styles.input,
                                marginTop: isShowKeyboard ? 0 : 16, 
                                top: isShowKeyboard ? -190 : 0,}} 
                                placeholder="Login"
                                inputMode="text"
                                onFocus={() => setIsShowKeyboard(true)}
                                value={ state.login }
                                onChangeText={(value) =>
                                setState((prevState) => ({ ...prevState, login: value }))}
                            />
                            <TextInput 
                                style={{...styles.input,
                                marginTop: isShowKeyboard ? 0 : 16, 
                                top: isShowKeyboard ? -190 : 0,}} 
                                placeholder="Email address" 
                                inputMode="email" 
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.email} 
                                onChangeText={(value) =>
                                setState((prevState) => ({ ...prevState, email: value }))}
                            />
                            <TextInput 
                                style={{...styles.input,
                                marginTop: isShowKeyboard ? 0 : 16,
                                top: isShowKeyboard ? -190 : 0, }} 
                                placeholder="Password" 
                                secureTextEntry={true} 
                                onFocus={() => setIsShowKeyboard(true)}
                                value={state.password}  
                                onChangeText={(value) =>
                                setState((prevState) => ({ ...prevState, password: value }))}
                            />
        
                            <TouchableOpacity
                                onPress={passwordShow}
                                style={ {...styles.pasShow,
                                top: isShowKeyboard ? -224 : -34, } } 
                                activeOpacity={0.5} 
                            >
                                <Text style={ styles.passwShowText }>Show</Text>
                            </TouchableOpacity>  

                            <TouchableOpacity
                                onPress={onSubmit}
                                style={{...styles.registerButton,
                                marginTop: isShowKeyboard ? 5 : 43, }} 
                                activeOpacity={0.5} 
                            >
                                <Text   
                                style={ styles.registerText }>Register</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                style={ styles.loginLink }
                                activeOpacity={0.5}>
                                <Text 
                                    style={ styles.loginLinkText }>
                                    Have you already had an account? 
                                    <Text style={ styles.loginLinkText }>
                                        Log in
                                    </Text>
                                </Text>
                            </TouchableOpacity> 
                        </View>
                    </KeyboardAvoidingView> 
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }, 
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    form: {
        alignItems: "center",
        width: 360,
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#ffffff",
    },
    pfotoContainer: {
        zIndex: 1,
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    addButton: {
        position: 'absolute',
        bottom: 15,
        right: -12,
        zIndex: 2,
        width: 25,
        height: 25,
    },
    title: {
        color: "#212121",
        marginTop: -45,              
        marginBottom: 16,
        fontSize: 30,
        lineHeight: 35.16,
    },
    input: {
        position: 'relative',
        width: 343,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
        color: "#BDBDBD",
        backgroundColor: "#F6F6F6",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
    },
    pasShow: {
        left: 130,
    },
    passwShowText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    }, 
    registerButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 343,
        height: 51,
        marginBottom: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
        shadowColor: "#000000",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    registerText: {
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 19,
    },
    loginLinkText: {
        color: "#1B4371",
        fontSize: 16,
        lineHeight: 19,
    },
});

export default RegistrationScreen;
