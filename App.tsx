import React, { useEffect, useState } from 'react';
import Navigatior from './component/navigation/Navigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Verdana-Bold': require('./assets/fonts/verdanab.ttf'),
  'Special-Elite-Regular': require('./assets/fonts/SpecialElite-Regular.ttf')
};

export default function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  useEffect(() => {
      loadFontsAsync();
    }, []);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setfontsLoaded(true);
  };

  if (fontsLoaded)
  {
    return <Navigatior></Navigatior>;
  }
  else {
    return <AppLoading />;
  }
}