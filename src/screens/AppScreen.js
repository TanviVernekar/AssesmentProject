import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import SiteList from '../screens/SiteList';
import SearchField from '../components/SearchField';
import {useDispatch} from 'react-redux';
import {filter} from '../redux/PassmanagerSlice';

const AppScreen = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const handlePress = () => {
    return navigation.navigate('Add Site');
  };
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
          <View>
            <TouchableOpacity onPress={() => setClicked(!clicked)}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.contentIcon}
              />
            </TouchableOpacity>
          </View>
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
        {clicked ? (
          <SearchField onChangeText={text => dispatch(filter(text))} />
        ) : (
          <>
          <View style={{justifyContent:"space-between",alignItems:"center",flexDirection:"row",width:"100%"}}>
            <View>
              <Text style={styles.mainContent}>Sites</Text>
              <View style={styles.borderBottom} />
            </View>
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
          </>
        )}
      </View>

      <SiteList navigation={navigation} />
      <TouchableOpacity title="add" style={styles.button} onPress={handlePress}>
        <Image
          source={require('../assets/images/add_btn.png')}
          style={styles.addButton}
        />
      </TouchableOpacity>
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
    backgroundColor: '#FAFAFA',
    marginTop: 10,
    
    
  },
  borderBottom: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 50,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginLeft: 17,
    marginVertical: -14,
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
  },
  dropDownContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dropDowntext: {
    color: '#3C4857',
    fontSize: 19.2,
    margin: 10,
    // marginLeft: '36%',
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
    height: 8,
    width: 13,
    marginLeft: 8,
    marginTop: 18,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 70,
  },
  addButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
});

export default AppScreen;
