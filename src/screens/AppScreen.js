import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SiteList from '../screens/SiteList';

const AppScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#2192FF"
      />
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Image source={require('../assets/images/burger_menu.png')} />
          <Image
            source={require('../assets/images/passmanager.png')}
            style={styles.content}
          />
        </View>
        <View style={styles.headerIcons}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.contentIcon}
          />
          <Image
            source={require('../assets/images/sync_icn.png')}
            style={styles.contentIcon}
          />
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.contentIcon}
          />
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.mainContent}>Sites</Text>
        <View style={[styles.dropDownContent]}>
          <Text style={styles.dropDowntext}>Social Media</Text>
          <View style={styles.oval}>
            <Text style={[styles.item]}>07</Text>
          </View>
          <Image
            source={require('../assets/images/pathcopy.png')}
            style={styles.arrow}
          />
        </View>
      </View>

      <SiteList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
    padding: 10,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menu: {
    flexDirection: 'row',
    // height: 600,
    // width: 400,
    backgroundColor: '#FAFAFA',
    marginTop: 10,
  
  },
  mainContent: {
    fontSize: 24,
    margin: 15,
    color: '#3C4857',
    fontWeight: '600',
    height: 33,
    width: 55,
    letterSpacing: 0,
    lineHeight: 33,
    borderBottomWidth: 3,
    borderRadius: 2,
    borderBottomColor: '#FFA222',
  },
  dropDownContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dropDowntext: {
    color: '#3C4857',
    fontSize: 19.2,
    margin: 10,
    marginLeft: '36%',
  },
  item: {
    color: 'white',
    height: 22,
    width: 19,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 22,
  },
  oval: {
    height: 25,
    width: 25,
    backgroundColor: '#0E85FF',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginTop: 8,
  },
  arrow: {
    height: 7.15,
    width: 15,
    marginLeft: 5,
    marginTop: 15,
  },
});

export default AppScreen;
