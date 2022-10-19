import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import AddSite from './AddSite';
import { useRoute } from '@react-navigation/native';

const SiteDetails = () => {
  const route=useRoute();
  return (
    <SafeAreaView>
      <Text style={styles.text}>URL</Text>
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={route.params.item.link}></TextInput>
      <Text style={styles.text} >Site Name</Text>
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={route.params.item.key}></TextInput>
      <Text style={styles.text}>Sector/Folder</Text>
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={route.params.item.folder}></TextInput>
      <Text style={styles.text}>User Name</Text>
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={route.params.item.username}></TextInput>
      <Text style={styles.text}>Site Password</Text>
      <TextInput style={styles.input} editable={false} selectTextOnFocus={false} value={route.params.item.password}></TextInput>
      <Text style={styles.text}>Notes</Text>
      <TextInput style={styles.description} editable={false} selectTextOnFocus={false} value={route.params.item.notes}></TextInput>
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
  description: {
    backgroundColor: '#F5F7FB',
    height: 61,
    width: 321,
    borderRadius: 4,
    marginStart: 30,
    borderColor: '#D7D7D7',
    borderWidth: 1,
  },
});
