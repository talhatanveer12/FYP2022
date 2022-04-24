import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Dimensions, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { Platform } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



const AdditionalInfo3 = ({navigation}) => {

    const [data,setData] = React.useState({
        Weight: '',
        Age: '',
        Gender: '',
        check_textInputChangeForWeight: false,
        check_textInputChangeForAge: false,
        check_textInputChangeForGender: false,
    });

    const check_textInputChangeForWeight = (val) => {
        if( val.length != 0 )
        {
            setData({
                ...data,
                Weight: val,
                check_textInputChangeForWeight: true
            });
        }
        else
        {
            setData({
                ...data,
                Weight: val,
                check_textInputChangeForWeight: false
            });
        }
    }
    const check_textInputChangeForAge = (val) => {
      if( val.length != 0 )
      {
          setData({
              ...data,
              Age: val,
              check_textInputChangeForAge: true
          });
      }
      else
      {
          setData({
              ...data,
              Age: val,
              check_textInputChangeForAge: false
          });
      }
  }
  const check_textInputChangeForGender = (val) => {
    if( val.length != 0 )
    {
        setData({
            ...data,
            Gender: val,
            check_textInputChangeForGender: true
        });
    }
    else
    {
        setData({
            ...data,
            Gender: val,
            check_textInputChangeForGender: false
        });
    }
}

  

    // const updateSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         secureTextEntry: !data.secureTextEntry
    //     });
    // }

    // const updateConfirmSecureTextEntry = () => {
    //     setData({
    //         ...data,
    //         confirm_secureTextEntry: !data.confirm_secureTextEntry
    //     });
    // }


  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
           <Text style={styles.text_header}>Medical History</Text>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Medical History Description</Text>
        <View style = {styles.textAreaContainer}>
           <TextInput multiline={true}
           placeholder='Description'
           underlineColorAndroid="transparent"
           numberOfLines={10}
           style={styles.textArea}
           />
        </View>
           <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.signIn, { borderColor: '#009387', borderWidth: 1, marginTop: 15}]}>
                   <Text style={[styles.textSign, {color: '#009387'}]}>Submit</Text>
               </TouchableOpacity>
           </View>
        </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

export default AdditionalInfo3;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#009387'
  },
  header:
  {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
  textAreaContainer:
  {
      marginTop: 20,
      borderColor: 'grey',
      borderWidth: 1,
      paddingLeft: 10,
      borderRadius: 5,

  },
  textArea:
  {
      height: 250,
      justifyContent: 'flex-start',
  },
  footer:
  {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical:30,
      paddingHorizontal: 20,
  },
  text_header:
  {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer:
  {
      color: '#05375a',
      fontSize: 18,
  },
  action:
  {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
  },
  textInput:
  {
      flex: 1,
      marginTop: Platform.OS === 'android' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a', 
  },
  button:
  {
      alignItems: 'center',
      marginTop: 50,
  },
  signIn:
  {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
  },
  textSign:
  {
      fontSize: 18,
      fontWeight: 'bold',
  }
});
