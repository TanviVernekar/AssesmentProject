import React from "react";
import { TouchableOpacity,StyleSheet,View,Text } from "react-native";

const ButtonField = ()=>{
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
};
export default ButtonField

const styles=StyleSheet.create({
    button:{
        backgroundColor:"#FFFFFF",
        padding:10,
        marginHorizontal:40,
        maxWidth:"40%",
        borderRadius:4,
        fontSize: 18,
        marginStart:50,
        height:44,
        width:130,
        marginTop:20

    },
    text:{
        textAlign:"center",
        color:"#0E85FF",
        fontWeight:"600",
        fontSize:20,
        
    }
})