import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import HomeSmartphonePortrait from './pages/HomeSmartphonePortrait/index';

function App(): JSX.Element {
  return (
    <View>
      <HomeSmartphonePortrait />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
