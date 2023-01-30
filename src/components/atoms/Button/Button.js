import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { fonts } from '../../../res';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.touchable_btn} onPress={onPress}>
      <Text style={styles.btn_text}> {text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable_btn: {
    backgroundColor: '#0FA956',
    borderRadius: 5,
    paddingHorizontal: 100,
    paddingVertical: 10,
  },
  btn_text: {
    alignItems:'center',
    color: 'white',
    fontSize: 24,
    fontFamily: fonts.Bold
  },
});

export default Button;
