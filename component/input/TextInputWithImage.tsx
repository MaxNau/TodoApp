import React  from "react";
import { NativeSyntheticEvent, StyleProp, TextInput, TextInputChangeEventData, TextStyle, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './TextInputWithImage.styles'

interface TextInputProp {
    placeholder: string;
    iconName: any;
    iconColor: string;
    secureText: boolean;
    style?: StyleProp<TextStyle>;
    onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export default function TextInputWithImage(prop: TextInputProp) {   
    return (
        <View style={styles.container}>
            <Ionicons style={styles.icon} name={prop.iconName} size={24} color={prop.iconColor} />
            <TextInput style={[styles.input, prop.style]}
                    placeholder={prop.placeholder}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={prop.secureText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChange={prop.onChange}/>
        </View>
    )
}