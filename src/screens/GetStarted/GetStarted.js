import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import IL_GetStarted_PNG from '../../res/images/Illustrations/il_getStarted.png';

const GetStarted = (props) => {
  return (
    <View style={styles.container}>
      <Image source={IL_GetStarted_PNG} style={styles.image} />
      <View style={styles.text}>
        <Text style={styles.first_text}>Shop Your Daily </Text>
        <Text style={styles.second_text}>Necessary</Text>
      </View>
      <View style={styles.button}>
        <Button text='Get Started' onPress={() => props.navigation.navigate('Home')}/>
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
    fontSize: 30,
    fontWeight: 'bold',
  },
  second_text: {
    color: '#0FA956',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 100,
  },
});

export default GetStarted;
