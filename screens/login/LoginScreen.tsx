import React, { useState }  from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TextInputWithImage from "../../component/input/TextInputWithImage";
import { DefaultTheme } from "../../config/theme/DefaultTheme";
import styles from './LoginScreen.styles';
import translate from 'i18n-js';
import TranslationKeys from "../../constants/localization/TranslationKeys";

export default function LoginScreen() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = () =>  {
        // todo
    }

    const forgotPassword = () => {
        // todo
    }

    const signUp = () => {

    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={styles.innerContainer}
                contentContainerStyle={styles.innerContainerContent}
                keyboardShouldPersistTaps="always">
                
                <View style={styles.form}>
                    <View style={styles.formHeader} >
                        <Text style={[styles.loginTitle, styles.textStyle]}>{translate.t(TranslationKeys.Login)}</Text>           
                        <Text style={[styles.signUpText, styles.textStyle]} onPress={signUp}>{translate.t(TranslationKeys.SignUp)}</Text>
                    </View>
                    <TextInputWithImage placeholder={translate.t(TranslationKeys.UserName)} iconName='person'
                        iconColor={DefaultTheme.IconColor} secureText={false}
                        style={styles.textStyle}
                        onChangeText={(input) => setUserName(input)}/>

                    <TextInputWithImage placeholder={translate.t(TranslationKeys.Password)} iconName='ios-key' 
                        iconColor={DefaultTheme.IconColor} secureText={true}
                        style={styles.textStyle}
                        onChangeText={(input) => setPassword(input)}/>

                    <Text style={[styles.forgotPasswordText, styles.textStyle]} 
                        onPress={forgotPassword}>{translate.t(TranslationKeys.ForgotPassword)}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={login}>
                        <Text style={[styles.textStyle, styles.buttonTitle]}>{translate.t(TranslationKeys.Login)}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
  }