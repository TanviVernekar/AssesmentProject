import React from "react";
import { View,Text, TextInput,StyleSheet,Image, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonField from "../components/ButtonField";
import { CustomButton } from "../components/ButtonField";




const AddSite=({navigation})=>{
    const handlePress=()=>{
        return navigation.navigate('AppScreen');
    }
    return(
        <SafeAreaView>
        <View >
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
          
        </View>
        <View style={styles.buttonContainer}>
        <CustomButton name="RESET"/>
        <CustomButton name="SAVE" onPress={handlePress}/> 
        </View>
        </SafeAreaView>
    );
}
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