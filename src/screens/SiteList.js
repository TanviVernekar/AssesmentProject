import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  Pressable,
  Alert,
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import { deleteSite } from '../redux/PassmanagerSlice';

import Clipboard from '@react-native-clipboard/clipboard';

const value = [
  {
    id: 1,
    sitename: 'Facebook',
    source: require('../assets/images/facebookIcon.png'),
    url: 'www.facebook.com',
    sitepassword: 'facebook',
    notes: 'Facebook notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
  {
    id: 2,
    sitename: 'Youtube',
    source: require('../assets/images/youtubeIcon.png'),
    url: 'www.youtube.com/ssmraok',
    sitepassword: 'Youtube',
    notes: 'Youtube notes',
    username: 'tanvi',

    sector: 'Social Media',
  },
  {
    id: 3,
    sitename: 'Twitter',
    source: require('../assets/images/twitterIcon.png'),
    url: 'www.twitter.com',
    sitepassword: 'Twitter',
    notes: 'Twitter notes',
    username: 'tanvi',

    sector: 'Social Media',
  },
  {
    id: 3,
    sitename: 'Instagram',
    source: require('../assets/images/instagramIcon.png'),
    url: 'www.instagram.com',
    sitepassword: 'Instagram',
    notes: 'Instagram notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
];

const SiteList = ({navigation}) => {
  const value = useSelector(state => state.manager.value);
  const dispatch=useDispatch();

  const handleCopy=(password)=>{

    Clipboard.setString(password);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={value}
        renderItem={({item}) => (
          <View>
            <Pressable
               onLongPress={() => {
                Alert.alert('Confirm', 'Do you want to delete Site', [
                  {
                    text: 'ok',
                    onPress: () => {
                      dispatch(deleteSite({id: item.id}));
                    },
                  },
                  {
                    text: 'cancel',
                  },
                ]);
              }
            }
              onPress={() => {
                console.log('Check Here!!!', item);
                navigation.navigate('Site Details', {item});
              }}>
              <View style={styles.itemContainer}>
                <View>
                  <View style={styles.topItem}>
                    <Image source={item.source}></Image>

                    <View>
                      <Text style={styles.socialText}>{item.sitename}</Text>
                      <TouchableOpacity style={styles.copyContent} onPress={()=>handleCopy(item.sitepassword)}>
                        <Icon name="content-copy" size={15} color="#0E85FF" />
                        <Text style={styles.copyText}> Copy Password</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.bottomItem}>
                    <Text style={styles.link}>{item.url}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};
export default SiteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
  
  
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    height: 115,
    // width: 365,
    justifyContent:"space-between",
    marginStart: 12,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    margin: 10,
  },
  topItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 65.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  bottomItem: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#FAFAFA',
    // width: 363,
    marginStart: -10,
  },
  socialText: {
    color: '#0E85FF',
    fontSize: 18,
    fontWeight: 60,
    lineHeight: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  copyText: {
    color: '#0E85FF',
    fontSize: 11.34,
    alignSelf: 'flex-end',
    paddingVertical: 3,
  },
  copyContent: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'flex-end',
    marginEnd: -18,
  },
  link: {
    color: '#3C4857',
    fontSize: 14.4,
    paddingBottom: 10,
  },
});
