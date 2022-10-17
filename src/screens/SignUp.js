import React from 'react';
import {View,StyleSheet,TextInput,Image} from 'react-native';
import InputField from '../components/InputField';
import ButtonField from '../components/ButtonField';

const SignUp = () => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          <InputField placeholder="Mobile Number"/>
          <InputField placeholder="Enter 4 digit Mpin"/>
          
          <View style={styles.SectionStyle}>
            <TextInput placeholder="Re-Enter 4 digit MPin"></TextInput>
            <Image
              source={require('/Volumes/Development/AssesmentProject/src/assets/images/eye.png')}
              style={styles.eyeicon}/>
          </View>
        </View>

        <ButtonField/>
      </View>
    </View>
  );
};
export default SignUp;

const styles=StyleSheet.create({
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
        margin:30
      },

})
