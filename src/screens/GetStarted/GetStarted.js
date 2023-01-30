import {Link} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';
import {fonts} from '../../res';
import IL_GetStarted_PNG from '../../res/images/Illustrations/il_getStarted.png';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.first_text}>Shop Your Daily </Text>
        <Text style={styles.second_text}>Necessary</Text>
      </View>
      <Gap height={90} />
      <View style={{alignItems:"center"}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text_button}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
  },
  image: {
    height: 225,
    width: '100%',
    resizeMode: 'stretch',
  },
  text: {
    marginTop: 70,
    alignItems: 'center',
  },
  first_text: {
    color: '#0FA956',
    fontSize: 35,
    fontFamily: fonts.Bold,
  },
  second_text: {
    color: '#0FA956',
    fontSize: 35,
    fontFamily: fonts.Bold,
  },
  button:{
    paddingHorizontal:131,
    paddingVertical:10,
    backgroundColor:"#0FA956",
    borderRadius:5
  },
  text_button:{
    color:"white",
    fontFamily:fonts.Regular,
    fontSize:24
  }
});

export default GetStarted;
