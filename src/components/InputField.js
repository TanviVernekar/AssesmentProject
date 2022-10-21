import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';

const InputField = props => {
  return (
    <View style={{width: "100%"}}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        name={props.name}
        keyboardType={props.keyboardType}
        placeholderTextColor={props.placeholderTextColor}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}></TextInput>
    </View>
  );
};
export default InputField;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 54,
    // width: "100%",
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
  },

  addInput: {
    borderRadius: 4,
    borderColor: 'black',
    paddingHorizontal: 10,
    height: 54,
    width: 300,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
  },
});
