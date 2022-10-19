import React from "react";
import { View,StyleSheet,Text,TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import { CustomButton } from "../components/ButtonField";
import SiteDetails from "./SiteDetails";

const EditScreen=({navigation})=>{
    return(
        <SafeAreaView style={{marginTop:-12}}>
          <Text style={styles.text}>URL</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.text}>Site Name</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.text}>Sector/Folder</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.text}>User Name</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.text}>Site Password</Text>
          <TextInput style={styles.input}></TextInput>
          <Text style={styles.text}>Notes</Text>
          <TextInput style={styles.description}></TextInput>
          <View style={{paddingTop:100}}>
          <TouchableOpacity style={styles.rectangle} onPress={()=>navigation.navigate("AppScreen")}>
                    <Text style={styles.update}>Update</Text>
           </TouchableOpacity>
          </View>
          
        </SafeAreaView>
       
    );
}
export default EditScreen;

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
      update:{
        height:28,
        width:65,
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"500",
        lineHeight:28,
        textAlign:"center",
    },
    rectangle:{
        height:55,
        width:400,
        backgroundColor:"#0E85FF",
        justifyContent:"center",
        alignItems:"center"
    }


})