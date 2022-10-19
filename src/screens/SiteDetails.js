import React, { useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput,Pressable,StatusBar} from 'react-native';
import AddSite from './AddSite';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo'
import {useDispatch} from 'react-redux'
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { add } from "../redux/PassmanagerSlice";

const SiteDetails = ({navigation}) => {
  const route=useRoute();
  const source=require("../assets/images/twitterIcon.png")
  
  const dispatch=useDispatch();
  return (
    <SafeAreaView>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#0E85FF" />
      <View style={styles.headerview}>
        <Text style={styles.sitename}>Site Details</Text>
        <Pressable style={styles.button} onPress={()=>navigation.navigate('EditScreen')}><Text style={styles.textheader}>Edit</Text></Pressable>
      </View>
      <Formik
          initialValues={{url: '', sitename: '', sector: '',username:'',sitepassword:'',notes:'',source:source,}}
          onSubmit={async values => {
            dispatch(add(values));
            console.log(values);
            try {
              const jsonValue = JSON.stringify(values);
              await AsyncStorage.setItem(values.url, jsonValue);
  
              alert('Successfully Added');
              navigation.navigate('AppScreen');
            } catch (err) {
              console.log(err);
            }
          }}>
         {({handleChange, handleBlur, values}) => (
          <>
          <View>
          <Text style={styles.text}>URL</Text>
          <TextInput 
          style={styles.input}
          name="url"
          onChangeText={handleChange('url')}
          onBlur={handleBlur('url')}
          value={route.params.item.url}
          />
          <Text style={styles.text}>Site Name</Text>
          <TextInput style={styles.input}
          name="sitename"
          onChangeText={handleChange('sitename')}
          onBlur={handleBlur('sitename')}
          value={route.params.item.sitename}
          />
          <Text style={styles.text}>Sector/Folder</Text>
          <TextInput style={styles.input}
          source={require('../assets/images/pathcopy.png')}
          name="folder"
          onChangeText={handleChange('folder')}
          onBlur={handleBlur('folder')}
          value={route.params.item.sector}
          />
          <Text style={styles.text}>User Name</Text>
          <TextInput style={styles.input}
          name="username"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={route.params.item.username}
          />
          <Text style={styles.text}>Site Password</Text>
          <TextInput style={styles.input}
          source={require('../assets/images/eye.png')}
          name="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={route.params.item.sitepassword}
          secureTextEntry
          keyboardType="numeric"/>
          <Text style={styles.text}>Notes</Text>
          <TextInput style={styles.description}
          value={route.params.item.notes}/>
        </View>
       
        </>
        )}
        </Formik>
    </SafeAreaView>
  );
};
export default SiteDetails;

const styles = StyleSheet.create({
  text: {
    height: 24,
    // width:34,
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginStart: 30,
    margin: 10,
  },
  input: {
    backgroundColor: '#F5F7FB',
    height: 41,
    width: 321,
    borderRadius: 4,
    marginStart: 30,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    marginBottom: 5,
    paddingStart:5
  },
  sitename:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",
    marginStart:100,
  },
  description: {
    backgroundColor: '#F5F7FB',
    height: 61,
    width: 321,
    borderRadius: 4,
    marginStart: 30,
    borderColor: '#D7D7D7',
    borderWidth: 1,
  },
  headerview:{
    backgroundColor: "#0E85FF",
    flexDirection:"row",
    padding:20
     
  },
  button:{
    marginHorizontal:100,
    
  },
  textheader:{
    fontSize:20,
    color:"white",
  }
});
