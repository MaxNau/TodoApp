import { StyleSheet } from 'react-native';

const backgroundColor = 'white';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        borderRadius: 5,
        maxHeight: 50,
        margin: 10,
        borderColor: 'grey',
        borderBottomWidth: 2
    },
    input: {
        height: 48,
        overflow: 'hidden',
        backgroundColor: backgroundColor,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        flex: 1
    },
    icon: {
        paddingRight: 10,
        paddingLeft: 10,
    }
});