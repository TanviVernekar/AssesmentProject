import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import {ButtonField} from '../components/ButtonField';
import InputField from '../components/InputField';
import Icon from 'react-native-vector-icons/Entypo';

import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const signinValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('Phone number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('mPin is required'),
  });

  const [secureTextEntry,setSecureTextEntry]=useState(true);
  const [icon,setIcon]=useState('eye');

  return (
    <View>
      <View>
        <Formik
          validationSchema={signinValidationSchema}
          initialValues={{mobileno: '', mpin: ''}}
          onSubmit={async values => {
            console.log(values);
            try {
              const jsonValue = await AsyncStorage.getItem(values.mobileno);
              if (jsonValue != null) {
                parseValue = JSON.parse(jsonValue);

                if (
                  values.mobileno === parseValue.mobileno &&
                  values.mpin === parseValue.mpin
                ) {
                  alert('Successfully Logged In');
                  navigation.navigate('AppScreen');
                } else {
                  alert('Enter Correct Mobile Number and MPin');
                }
              }
            } catch (err) {
              console.log(err);
            }
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={styles.container}>
                <InputField
                  placeholder="Mobile Number"
                  placeholderTextColor={'grey'}
                  onChangeText={handleChange('mobileno')}
                  onBlur={handleBlur('mobileno')}
                  value={values.mobileno}
                  keyboardType="number-pad"
                />

                {errors.mobileno && (
                  <Text style={styles.error}>{errors.mobileno}</Text>
                )}

                <View style={styles.SectionStyle}>
                  <TextInput
                    name="mpin"
                    placeholder="MPin"
                    style={styles.textInput}
                    onChangeText={handleChange('mpin')}
                    placeholderTextColor={'grey'}
                    onBlur={handleBlur('mpin')}
                    value={values.mpin}
                    keyboardType="number-pad"
                    secureTextEntry={secureTextEntry}
                  />
                  <Icon name={icon} size={25} onPress={()=>{
                  setSecureTextEntry(!secureTextEntry);
                  secureTextEntry ? setIcon("eye"):setIcon("eye-with-line")}} />
                </View>
                {errors.mpin && <Text style={styles.error}>{errors.mpin}</Text>}
              </View>
              <Pressable>
                <Text style={styles.text}>Forgot your password?</Text>
              </Pressable>

              <ButtonField
                name="SIGN IN"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>

      <View style={styles.fingerprintIcon}>
        <Image
          source={require('/Volumes/Development/AssesmentProject/src/assets/images/fingerprinticon.png')}
        />
        <Text style={styles.textBottom}>
          <Text style={styles.text2}>OR</Text>
          <Text> USE YOUR FINGERPRINT TO LOGIN </Text>
        </Text>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25,
  },

  eyeicon: {
    height: 15,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 54,
    width: 300,
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    fontWeight: 'bold',
    marginTop: 30,
  },
  text: {
    height: 17,
    color: '#FFFFFF',
    fontSize: 14,
    margin: 30,
    fontWeight: '600',
    marginStart: 50,
    marginBottom: 50,
  },
  fingerprintIcon: {
    alignItems: 'center',
    paddingTop: 80,
  },
  textBottom: {
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '600',
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});
