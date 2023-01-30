import {Link} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Gap from '../../components/atoms/Gap/Gap';
import Header from '../../components/molecules/Header/Header';
import {fonts} from '../../res';
import {IM_Login} from '../../res/images/Illustrations';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <Image style={{width: '100%', height: 200}} source={IM_Login} />
      <View style={styles.header}>
        <View style={styles.title_view}>
          <Text style={styles.login_title}>Welcome Back !</Text>
          <Text style={styles.sub_login_title}>login to your account</Text>
        </View>
        <TextInput style={styles.email_input} placeholder="Enter Email" />
        <Gap height={20} />
        <TextInput
          style={styles.email_input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text_button}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_register}>
          <Text style={styles.text_register}>
            Have Account ? <Link to={{screen: 'Register'}}> Login </Link>{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(187, 208, 136, 0.5)',
  },
  login_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  login: {
    fontFamily: fonts.Bold,
    fontSize: 55,
    color: '#404258',
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 100,
    height: '100%',
  },
  email_input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  title_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '25%',
  },
  login_title: {
    color: '#0FA956',
    fontFamily: fonts.Bold,
    fontSize: 30,
  },
  sub_login_title: {
    color: '#404258',
    fontSize: 16,
    fontFamily: fonts.Regular,
    marginTop: 5,
  },
  button: {
    paddingHorizontal: 140,
    paddingVertical: 8,
    backgroundColor: '#0FA956',
    borderRadius: 30,
  },
  text_button: {
    color: 'white',
    fontFamily: fonts.SemiBold,
    fontSize: 24,
  },
  view_register: {
    alignItems: 'flex-end',
    marginTop: 15,
  },
  text_register: {
    color: '#404258',
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
});

export default Register;
