import React, { useState } from "react";
import { View,Text, TextInput,StyleSheet,Image, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonField from "../components/ButtonField";
import { CustomButton } from "../components/ButtonField";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { add } from "../redux/PassmanagerSlice";

import { useDispatch } from "react-redux";





const AddSite=({navigation})=>{
    const source=require("../assets/images/twitterIcon.png")
    const[values,setInputValue]=useState('');
    const dispatch = useDispatch();
    return(
        <SafeAreaView>
        
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
         {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
          <View>
          <Text style={styles.text}>URL</Text>
          <TextInput 
          style={styles.input}
          name="url"
          onChangeText={handleChange('url')}
          onBlur={handleBlur('url')}
          value={values.url}
          />
          <Text style={styles.text}>Site Name</Text>
          <TextInput style={styles.input}
          name="sitename"
          onChangeText={handleChange('sitename')}
          onBlur={handleBlur('sitename')}
          value={values.sitename}
          />
          <Text style={styles.text}>Sector/Folder</Text>
          <TextInput style={styles.input}
          source={require('../assets/images/pathcopy.png')}
          name="folder"
          onChangeText={handleChange('folder')}
          onBlur={handleBlur('folder')}
          value={values.folder}
          />
          <Text style={styles.text}>User Name</Text>
          <TextInput style={styles.input}
          name="username"
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
          />
          <Text style={styles.text}>Site Password</Text>
          <TextInput style={styles.input}
          source={require('../assets/images/eye.png')}
          name="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          secureTextEntry
          keyboardType="numeric"/>
          <Text style={styles.text}>Notes</Text>
          <TextInput style={styles.description}/>
        </View>
        <View style={styles.buttonContainer}>
        <CustomButton name="RESET"/>
        <CustomButton name="SAVE" onPress={handleSubmit}/> 
        </View>
        </>
        )}
        </Formik>
        </SafeAreaView>
    );
};
export default AddSite;

const styles=StyleSheet.create({
    text:{
        height:24,
        // width:34,
        color:"#949CA5",
        fontSize:18,
        letterSpacing:0,
        lineHeight:24,
        marginStart:30,
        margin:10,
    },
    input:{
        backgroundColor:"#F5F7FB",
        height:41,
        width:321,
        borderRadius:4,
        marginStart:30,
        borderColor:"#D7D7D7",
        borderWidth:1,
        marginBottom:5
    },
    description:{
        backgroundColor:"#F5F7FB",
        height:61,
        width:321,
        borderRadius:4,
        marginStart:30,
        borderColor:"#D7D7D7",
        borderWidth:1
    },
    button:{
        position:"absolute",
        bottom:10,
        right:10,
        left:10,
        height:55,
        width:180,
        backgroundColor:"#0E85FF"
    },
    buttonContainer:{
        flexDirection:"row"
    }
   

})