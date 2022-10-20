import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

export const ButtonField = props => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CustomButton = ({name, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles2.button2} onPress={onPress}>
        <Text style={styles2.textInput}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 40,
    maxWidth: '40%',
    borderRadius: 4,
    fontSize: 18,
    marginStart: 50,
    height: 44,
    width: 130,
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    color: '#0E85FF',
    fontWeight: '600',
    fontSize: 20,
  },
});

const styles2 = StyleSheet.create({
  button2: {
    height: 55,
    width: 196,
    backgroundColor: '#0E85FF',
    // borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 75,
    marginRight: 1,
  },
  textInput: {
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 24,
    height: 24,
    width: 75,
    letterSpacing: 1.2,
    fontSize: 18,
  },
});
