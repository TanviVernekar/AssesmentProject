import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomButton} from '../components/ButtonField';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {add} from '../redux/PassmanagerSlice';
import Toast from 'react-native-simple-toast';
import * as yup from 'yup';
import DropdownField from '../components/DropdownField';

import {useDispatch, useSelector} from 'react-redux';

const AddSite = ({navigation}) => {
  const source = require('../assets/images/twitterIcon.png');
  const [values, setInputValue] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(state => state.manager.value);


  const [selected, setSelected] = useState(' ');
  const dropdownData = [
    {key: 'Social Media', value: 'Social Media'},
    {key: 'Shopping Sites', value: 'Shopping Sites'},
  ];

  const signupValidationSchema = yup.object().shape({
    url: yup.string().required(),
    sitename: yup.string().required(),
    username: yup.string().required(),
    sitepassword: yup.string().required(),
    notes: yup.string().required(),
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <Formik
          validationSchema={signupValidationSchema}
          initialValues={{
            url: '',
            sitename: '',
            sector: '',
            username: '',
            sitepassword: '',
            notes: '',
            source: source,
          }}
          onSubmit={async values => {
            const obj = {
              id: data.length + 1,
              url: values.url,
              sitename: values.sitename,
              sector: selected,
              username: values.username,
              sitepassword: values.sitepassword,
              notes: values.notes,
              source: source,
            };

            dispatch(add(obj));
            console.log(values);
            try {
              Toast.show('Saved Successfully');
              navigation.navigate('AppScreen');
            } catch (err) {
              console.log(err);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, handleReset}) => (
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
                <TextInput
                  style={styles.input}
                  source={require('../assets/images/eye.png')}
                  name="sitepassword"
                  onChangeText={handleChange('sitepassword')}
                  onBlur={handleBlur('sitepassword')}
                  value={values.sitepassword}
                  secureTextEntry
                />
                <Text style={styles.text}>Notes</Text>
                <TextInput
                  style={styles.description}
                  value={values.notes}
                  onChangeText={handleChange('notes')}
                />
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton name="RESET" onPress={handleReset} />
                <CustomButton name="SAVE" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddSite;

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
  input: {
    backgroundColor: '#F5F7FB',
    height: 41,
    borderRadius: 4,
    marginStart: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    marginBottom: 5,
    marginEnd: 10,
  },
  description: {
    backgroundColor: '#F5F7FB',
    height: 61,
    borderRadius: 4,
    marginStart: 10,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    marginEnd: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
