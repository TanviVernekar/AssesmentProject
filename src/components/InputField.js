import React from "react";
import { View,Text,Image, SafeAreaView,StyleSheet, ImageBackground,StatusBar, TextInput} from "react-native";

const InputField=({placeholder})=>{
    return(
        <View style={styles.container}>
        
        <TextInput 
            placeholder={placeholder}
            style={styles.textInput}>
        </TextInput>
        {/* <View style={styles.SectionStyle}>
            <TextInput 
                placeholder="MPin">   
            </TextInput>
            <Image source={require("/Volumes/Development/AssesmentProject/src/assets/images/eye_on.png")} style={styles.eyeicon}/>
        </View> */}
      </View>
    )

}
export default InputField;

const styles=StyleSheet.create({
    textInput:{
        backgroundColor:"white",
        borderRadius:4,
        paddingHorizontal:10,
        // margin:25,
        // flexDirection:"row",
        height: 54,
        width: 300,
        fontSize: 16,
        // fontweight: "600",
        fontWeight:"bold",
        marginTop:40,
    
    },
    // eyeicon:{
    //      height: 15,
    //     width: 20,
    //     resizeMode : 'stretch',
    //     alignItems: 'center'
    // },
    // SectionStyle: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#fff',
    //     height:54,
    //     width: 300,
    //     borderRadius: 3 ,
    //     justifyContent:"space-between",
    //     paddingHorizontal:10,
    //     fontWeight:"bold",
        
    // }
})