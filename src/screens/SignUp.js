import React from 'react';
import {View, StyleSheet, TextInput, Image,Text} from 'react-native';
import InputField from '../components/InputField';
import {ButtonField} from '../components/ButtonField';
import Icon from "react-native-vector-icons/Entypo";

import {Formik, Field} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  // const handlesubmit = () => {
  //   return navigation.navigate('AppScreen');
  // };
  const signupValidationSchema = yup.object().shape({
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('mobile number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('MPIN is required'),

    conformmpin: yup
      .string()
      .oneOf([yup.ref('mpin')], 'mPin do not match')
      .required('Confirm mPin is required'),
  });
  return (
    <View>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{mobileno: '', mpin: '', conformmpin: ''}}
        onSubmit={async values => {
          console.log(values);
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem(values.mobileno, jsonValue);
            alert('Successfully Added');
            navigation.navigate('Sign In');
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
                name="mobileno"
                keyboardType="numeric"
                placeholderTextColor="grey"
                onChangeText={handleChange('mobileno')}
                onBlur={handleBlur('mobileno')}
                value={values.mobileno}
              />
              {errors.mobileno && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.mobileno}
                </Text>
              )}

              <TextInput
                name="mpin"
                placeholder="Enter 4 digit Mpin"
                onChangeText={handleChange('mpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('mpin')}
                value={values.mpin}
                secureTextEntry
                keyboardType="numeric"
                style={styles.textInput}
              />
              {errors.mpin && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.mpin}</Text>
              )}

              <View style={styles.SectionStyle}>
                <TextInput
                  name="confirmmpin"
                  placeholder="Re-Enter 4 digit Mpin"
                  onChangeText={handleChange('conformmpin')}
                  placeholderTextColor={'grey'}
                  onBlur={handleBlur('conformmpin')}
                  value={values.conformmpin}
                  secureTextEntry
                  keyboardType="numeric"
                />
                {/* <Image
                  source={require('/Volumes/Development/AssesmentProject/src/assets/images/eye.png')}
                  style={styles.eyeicon}
                /> */}
                <Icon name='eye-with-line' size={25} />
                
              </View>
              {errors.conformmpin && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.conformmpin}
                  </Text>
                )}
            </View>

            <ButtonField onPress={handleSubmit}
            name="SIGN UP"
            disabled={!isValid} />
          </>
        )}
      </Formik>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25,
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
    margin: 30,
  },
  
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

});
