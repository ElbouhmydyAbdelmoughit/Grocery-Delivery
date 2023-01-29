import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '../../components/molecules/Header/Header';

const Login = ({navigation}) => {
  return (
    <View>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
