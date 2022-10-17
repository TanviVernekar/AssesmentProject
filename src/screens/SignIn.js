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
import ButtonField from '../components/ButtonField';
import InputField from '../components/InputField';

const SignIn = () => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          <InputField placeholder="Mobile Number"/>
          <View style={styles.SectionStyle}>
            <TextInput placeholder="MPin"></TextInput>
            <Image
              source={require('/Volumes/Development/AssesmentProject/src/assets/images/eye.png')}
              style={styles.eyeicon}
            />
          </View>
        </View>
        <Text style={styles.text}>Forgot your password?</Text>
        <ButtonField />
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
    marginTop:30
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
});
