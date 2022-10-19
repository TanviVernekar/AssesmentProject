import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import TabNavigation from '../navigations/TabNavigation';
import LinearGradient from 'react-native-linear-gradient';

const MainScreen = () => {
  return (
    <LinearGradient
      colors={['#20BBFF', '#0E85FF']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
        />
        <View style={styles.view}>
          <Image
            source={require('/Volumes/Development/AssesmentProject/src/assets/images/logo.png')}
            style={styles.image}></Image>
        </View>
        <View style={styles.tab}>
          <TabNavigation />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  linearGradient: {
    flex: 1,
  },
  view: {
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    marginTop: 20,
  },
});
