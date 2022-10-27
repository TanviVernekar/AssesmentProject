import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ICON from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {edit} from '../redux/PassmanagerSlice';
import DropdownField from '../components/DropdownField';

const EditScreen = ({navigation}) => {
  const route = useRoute();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [icon, setIcon] = useState('eye');
  const source = require('../assets/images/twitterIcon.png');
  const dispatch = useDispatch();
  const siteid = route.params.data.id;



  const [selected, setSelected] = useState(' ');
  const dropdownData = [
    {key: 'Social Media', value: 'Social Media'},
    {key: 'Shopping Sites', value: 'Shopping Sites'},
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#0E85FF"
        />
        <Formik
          initialValues={{
            url: route.params.data.url,
            sitename: route.params.data.sitename,
            sector: route.params.data.sector,
            username: route.params.data.username,
            sitepassword: route.params.data.sitepassword,
            notes: route.params.data.notes,
            source: route.params.data.source,
          }}
          
          onSubmit={async values => {
            const obj = {
              id: siteid,
              url: values.url,
              sitename: values.sitename,
              sector:selected,
              username: values.username,
              sitepassword: values.sitepassword,
              notes: values.notes,
              source: source,
              
            };
            console.log(selected);
            dispatch(edit(obj));
            navigation.navigate('AppScreen');
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
                <TextInput
                  style={styles.input}
                  name="sitename"
                  onChangeText={handleChange('sitename')}
                  onBlur={handleBlur('sitename')}
                  value={values.sitename}
                />
                {/* <Text style={styles.text}>Sector/Folder</Text> */}
                {/* <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    name="sector"
                    selectTextOnFocus={false}
                    onChangeText={handleChange('sector')}
                    onBlur={handleBlur('sector')}
                    value={values.sector}
                  />
                  <Icon name="chevron-down" size={25} color="#0E95FF" />
                </View> */}
                  <DropdownField
                text="sector"
                name="sector"
                onChangeText={handleChange('sector')}
                onBlur={handleBlur('sector')}
                data={dropdownData}
                value={selected}
                setSelected={setSelected}
              />
                <Text style={styles.text}>User Name</Text>
                <TextInput
                  style={styles.input}
                  name="username"
                 
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <Text style={styles.text}>Site Password</Text>
                <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    
                    name="sitepassword"
                    selectTextOnFocus={false}
                    onChangeText={handleChange('sitepassword')}
                    onBlur={handleBlur('sitepassword')}
                    value={values.sitepassword}
                    secureTextEntry={secureTextEntry}
                  />
                  <Icon
                    name={icon}
                    size={25}
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                      secureTextEntry
                        ? setIcon('eye-with-line')
                        : setIcon('eye');
                    }}
                  />
                </View>
                <Text style={styles.text}>Notes</Text>
                <TextInput
                  style={styles.description}
                  
                  value={values.notes}
                />
              </View>
              <View style={styles.buttonview}>
                <TouchableOpacity
                  style={styles.rectangle}
                  onPress={handleSubmit}>
                  <Text style={styles.update}>Update</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EditScreen;

const styles = StyleSheet.create({
  text: {
    height: 24,
    color: '#949CA5',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    marginStart: 10,
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
    width: "100%",
    borderRadius: 4,
    marginStart: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    marginBottom: 5 ,
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
    // width: 321,
    borderRadius: 4,
    marginStart: 10,
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
    // width: 321,
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 4,
    backgroundColor: '#FSF7FB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginStart: 10,
    backgroundColor: '#F5F7FB',
    justifyContent:"space-between"
  },
  inputText1: {
    height: 41,
    // width: 280,
    lineHeight: 24,
    
  },
  update: {
    height: 28,
    width: 65,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
    textAlign: 'center',
  },
  rectangle: {
    height: 55,
    // width: 400,
    backgroundColor: '#0E85FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonview: {
    paddingTop: 100,
    paddingHorizontal:20
  },
});
