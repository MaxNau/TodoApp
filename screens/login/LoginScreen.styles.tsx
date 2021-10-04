import { StyleSheet } from 'react-native';
import LoginScreenStyles from '../../constants/LoginScreenStyles';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
  },
  innerContainer: {
      flex: 1, 
      width: '100%',
      height: 'auto' 
  },
  innerContainerContent: {
      flex: 1, 
      width: '100%', 
      justifyContent: 'center'
  },
  formHeader: {
      flexDirection:'row', 
      alignItems:'center', 
      marginBottom: 40, 
      marginTop: 25,  
      margin: 15, 
  },
  form: {
      margin: '5%',    
      shadowColor: '#000',
      shadowOffset: { 
          width: 0, 
          height: 1 
      },
      shadowOpacity: 0.8,
      shadowRadius: 5,  
      elevation: 3, 
      borderRadius: 15
  },
  textStyle: {
      color: LoginScreenStyles.FontColor,
      fontFamily: LoginScreenStyles.FontFamily
  },
  loginTitle: {
      flex: 1, 
      fontSize: 26
  },
  signUpText: {
      fontSize: 16, 
  },
  forgotPasswordText: {
      alignSelf: 'flex-end',
      fontSize: 12,
      marginRight: 15
  },
  button: {
      top: '8%',
      backgroundColor: '#232b2b',
      marginTop: 20,
      height: 48,
      borderRadius: 25,
      width: '50%',
      left: '25%',
      alignItems: "center",
      justifyContent: 'center',
      zIndex: 1
  },
  buttonTitle: {
      color: 'white',
      fontSize: 16
  },
  footerView: {
      flex: 1,
      alignItems: "center",
      marginTop: 20
  }
  });