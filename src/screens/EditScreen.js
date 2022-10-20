// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import { useRoute } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';

// const EditScreen = ({navigation}) => {
//   // const route = useRoute();
//   // const dispatch = useDispatch();

//   return (
//     <SafeAreaView style={styles.view}>
//       <Text style={styles.text}>URL</Text>
//       <TextInput style={styles.input}></TextInput>
//       <Text style={styles.text}>Site Name</Text>
//       <TextInput style={styles.input}></TextInput>
//       <Text style={styles.text}>Sector/Folder</Text>

//       <TextInput style={styles.input}></TextInput>
//       <Text style={styles.text}>User Name</Text>
//       <TextInput style={styles.input}></TextInput>
//       <Text style={styles.text}>Site Password</Text>
//       <TextInput style={styles.input}></TextInput>
//       <Text style={styles.text}>Notes</Text>
//       <TextInput style={styles.description}></TextInput>
//       <View style={styles.buttonview}>
//         <TouchableOpacity
//           style={styles.rectangle}
//           onPress={() => navigation.navigate('AppScreen')}>
//           <Text style={styles.update}>Update</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default EditScreen;

// const styles = StyleSheet.create({
//   text: {
//     height: 24,

//     color: '#949CA5',
//     fontSize: 18,
//     letterSpacing: 0,
//     lineHeight: 24,
//     marginStart: 30,
//     margin: 10,
//   },
//   input: {
//     backgroundColor: '#F5F7FB',
//     height: 41,
//     width: 321,
//     borderRadius: 4,
//     marginStart: 30,
//     borderColor: '#D7D7D7',
//     borderWidth: 1,
//     marginBottom: 5,
//   },
//   description: {
//     backgroundColor: '#F5F7FB',
//     height: 61,
//     width: 321,
//     borderRadius: 4,
//     marginStart: 30,
//     borderColor: '#D7D7D7',
//     borderWidth: 1,
//   },
//   update: {
//     height: 28,
//     width: 65,
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: '500',
//     lineHeight: 28,
//     textAlign: 'center',
//   },
//   rectangle: {
//     height: 55,
//     width: 400,
//     backgroundColor: '#0E85FF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   view: {
//     marginTop: -12,
//   },
//   buttonview: {
//     paddingTop: 100,
//   },
// });
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

const SiteDetails = ({navigation}) => {
  const route = useRoute();
  const [secureTextEntry,setSecureTextEntry]=useState(true);
  const [icon,setIcon]=useState('eye');

  const dispatch = useDispatch();
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
                  value={route.params.data.url}
                />
                <Text style={styles.text}>Site Name</Text>
                <TextInput
                  style={styles.input}
                  name="sitename"
                  value={route.params.data.sitename}
                />
                <Text style={styles.text}>Sector/Folder</Text>
                <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    selectTextOnFocus={false}
                    value={route.params.data.sector}
                  />
                  <Icon name="chevron-down" size={25} color="#0E95FF" />
                </View>
                <Text style={styles.text}>User Name</Text>
                <TextInput
                  style={styles.input}
                  name="username"
                  editable={false}
                  value={route.params.data.username}
                />
                <Text style={styles.text}>Site Password</Text>
                <View style={styles.inputBox1}>
                  <TextInput
                    style={styles.inputText1}
                    editable={false}
                    selectTextOnFocus={false}
                    value={route.params.data.sitepassword}
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
                  value={route.params.data.notes}
                />
              </View>
            </>
          )}
        </Formik>
        <View style={styles.buttonview}>
          <TouchableOpacity
            style={styles.rectangle}
            onPress={() => navigation.navigate('AppScreen')}>
            <Text style={styles.update}>Update</Text>
          </TouchableOpacity>
        </View>
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
    width: 400,
    backgroundColor: '#0E85FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonview: {
    paddingTop: 100,
  },
});
