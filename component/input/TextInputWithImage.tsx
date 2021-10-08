import React  from "react";
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputChangeEventData, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './TextInputWithImage.styles'

interface TextInputProp {
    placeholder: string;
    iconName?: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    secureText: boolean;
    style?: StyleProp<TextStyle>;
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onChangeText?: (text: string) => void;
}

export default function TextInputWithImage({placeholder, iconName, iconColor, secureText, 
    style, onChange, onChangeText}: TextInputProp) {   
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name={iconName} size={24} color={iconColor} />
            <TextInput style={[styles.input, style]}
                    placeholder={placeholder}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={secureText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChange={onChange}
                    onChangeText={onChangeText}/>
        </View>
    )
}