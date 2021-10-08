import React, { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './config/theme/navigation/Navigator';

let customFonts = {
  'Verdana-Bold': require('./assets/fonts/verdanab.ttf'),
  'Special-Elite-Regular': require('./assets/fonts/SpecialElite-Regular.ttf')
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  useEffect(() => {
    initLocalization();
      loadFontsAsync();
    }, [])

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setfontsLoaded(true);
  }

  const initLocalization = () => {  
    i18n.translations = {
      en: require("./assets/translations/en.json")
    };
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;
  }

  if (fontsLoaded)
  {
    return <View style={{flex:1, marginTop: StatusBar.currentHeight}}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>;
  }
  else {
    return <AppLoading />;
  }
}