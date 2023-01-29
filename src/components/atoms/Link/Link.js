import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Link = ({text, to, navigation}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text onPress={navigation.navigate({to})} > {text} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Link;
