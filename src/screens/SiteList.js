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
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons"


const SITES = [
    {
      key: 'Facebook',
      source: require('../assets/images/facebookIcon.png'),
      link: 'www.facebook.com',
      password:'facebook',
      notes:'Facebook notes',
      username:'tanvi',
      
      folder:'Social Media'
    },
    {
      key: 'Youtube',
      source: require('../assets/images/youtubeIcon.png'),
      link: 'www.youtube.com/ssmraok',
      password:'Youtube',
      notes:'Youtube notes',
      username:'tanvi',
      
      folder:'Social Media'
    },
    {
      key: 'Twitter',
      source: require('../assets/images/twitterIcon.png'),
      link: 'www.twitter.com',
      password:'Twitter',
      notes:'Twitter notes',
      username:'tanvi',
     
      folder:'Social Media'
    },
    {
      key: 'Instagram',
      source: require('../assets/images/instagramIcon.png'),
      link: 'www.instagram.com',
      password:'Instagram',
      notes:'Instagram notes',
      username:'tanvi',
      
      folder:'Social Media'
    },
  ];
  
  const SiteList = ({navigation}) => {
    
    return (
      <View style={styles.container}>
        <FlatList
          data={SITES}
          renderItem={({item}) => (
            <View>
              <Pressable onPress={()=>navigation.navigate('Site Details',{item})}>
            <View style={styles.itemContainer}>
              <View>
                <View style={styles.topItem}>
                  <Image source={item.source}></Image>
  
                  <View >
                    <Text style={styles.socialText}>{item.key}</Text>
                    <View style={styles.copyContent}>
                        <Icon name="content-copy" size={15} color="" />
                      <Text style={styles.copyText}> Copy Password</Text>
                    </View>
                  </View>
                </View>
  
                <View style={styles.bottomItem}>
                  <Text style={styles.link}>{item.link}</Text>
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
      marginTop:2
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemContainer: {
    //   height: 103.5,
      backgroundColor: '#FFFFFF',
    //   marginHorizontal: 30,
      borderRadius: 5,
      height: 115,
      width: 365,
      marginStart:12,
      
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    margin:10
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
      backgroundColor:"#FAFAFA",
      width:363,
      marginStart:-10
      
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
    copyContent:{
        flexDirection:"row",
        paddingTop:10,
        justifyContent:"flex-end",
        marginEnd:-18
        
    },
    link: {
      color: '#3C4857',
      fontSize: 14.4,
      paddingBottom:10
    },
  });