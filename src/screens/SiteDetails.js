import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ICON from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';

const SiteDetails = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();

  const [secureTextEntry,setSecureTextEntry]=useState(true);
  const [icon,setIcon]=useState('eye');

  const data = route.params.item;
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#0E85FF"
        />
        <View style={styles.topbar}>
          <ICON
            name="arrowleft"
            size={25}
            color="white"
            onPress={() => {
              navigation.navigate('AppScreen');
            }}
          />
          <Text style={styles.sitename}>Site Details</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('EditScreen', {data})}>
            <Text style={styles.textheader}>Edit</Text>
          </Pressable>
        </View>
        <Formik
          initialValues={{
            url: '',
            sitename: '',
            sector: '',
            username: '',
            sitepassword: '',
            notes: '',
          }}>
          {({handleChange, handleBlur, values}) => (
            <>
              <View>
                <Text style={styles.text}>URL</Text>
                <TextInput
                  style={styles.input}
                  name="url"
                  editable={false}
                  value={route.params.item.url}
                />
                <Text style={styles.text}>Site Name</Text>
                <TextInput
                  style={styles.input}
                  name="sitename"
                  editable={false}
                  value={route.params.item.sitename}
                />
                <Text style={styles.text}>Sector/Folder</Text>
                <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    editable={false}
                    selectTextOnFocus={false}
                    value={route.params.item.sector}
                  />
                  <Icon name="chevron-down" size={25} color="#0E95FF" />
                </View>
                <Text style={styles.text}>User Name</Text>
                <TextInput
                  style={styles.input}
                  name="username"
                  editable={false}
                  value={route.params.item.username}
                />
                <Text style={styles.text}>Site Password</Text>
                <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    editable={false}
                    selectTextOnFocus={false}
                    value={route.params.item.sitepassword}
                    secureTextEntry={secureTextEntry}
                  />
                  <Icon name={icon} size={25} onPress={()=>{
                  setSecureTextEntry(!secureTextEntry);
                  secureTextEntry ? setIcon("eye"):setIcon("eye-with-line")}} />
                </View>
                <Text style={styles.text}>Notes</Text>
                <TextInput
                  style={styles.description}
                  editable={false}
                  value={route.params.item.notes}
                />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SiteDetails;

const styles = StyleSheet.create({
  text: {
    height: 24,
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginStart: 30,
    margin: 10,
  },
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
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
    paddingStart: 5,
  },
  sitename: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginStart: 100,
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
  headerview: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    padding: 20,
  },
  button: {
    marginHorizontal: 100,
  },
  textheader: {
    fontSize: 20,
    color: 'white',
  },
  inputBox1: {
    height: 41,
    width: 321,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#FSF7FB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginStart: 30,
    backgroundColor: '#F5F7FB',
  },
  inputText1: {
    height: 41,
    width: 280,
    lineHeight: 24,
  },
});
