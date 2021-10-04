import React  from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextInputWithImage from "../../component/input/TextInputWithImage";
import IconNames from "../../constants/IconNames";
import LoginScreenStyles from "../../constants/LoginScreenStyles";
import Strings from "../../localization/Strings";
import styles from './LoginScreen.styles';
import LoginViewModel from "./LoginViewModel";

export default function LoginScreen() {
    const loginViewModel = new LoginViewModel();

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.innerContainer}
                contentContainerStyle={styles.innerContainerContent}
                keyboardShouldPersistTaps="always">
                
                <View style={styles.form}>
                    <View style={styles.formHeader} >
                        <Text style={[styles.loginTitle, styles.textStyle]}>{Strings.Login}</Text>           
                        <Text style={[styles.signUpText, styles.textStyle]} onPress={loginViewModel.signUp}>{Strings.SignUp}</Text>
                    </View>
                    <TextInputWithImage placeholder={Strings.UserName} iconName={IconNames.Person}
                        iconColor={LoginScreenStyles.IconColor} secureText={false}
                        style={styles.textStyle}
                        onChange={loginViewModel.userNameChange}/>

                    <TextInputWithImage placeholder={Strings.Password} iconName={IconNames.IosKey} 
                        iconColor={LoginScreenStyles.IconColor} secureText={true}
                        style={styles.textStyle}
                        onChange={loginViewModel.passwordChange}/>

                    <Text style={[styles.forgotPasswordText, styles.textStyle]} onPress={loginViewModel.forgotPassword}>{Strings.ForgotPassword}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={loginViewModel.login}>
                        <Text style={[styles.textStyle, styles.buttonTitle]}>{Strings.Login}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
  }