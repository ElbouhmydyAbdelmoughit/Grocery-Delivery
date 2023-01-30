import {Link} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Button from '../../components/atoms/Button/Button';
import Gap from '../../components/atoms/Gap/Gap';
import Header from '../../components/molecules/Header/Header';
import {fonts} from '../../res';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.login_view}>
        <Text style={styles.login}>Login</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.title_view}>
          <Text style={styles.login_title}>Welcome Back !</Text>
          <Text style={styles.sub_login_title}>login to your account</Text>
        </View>
        <TextInput style={styles.email_input} placeholder="Enter Email" />
        <Gap height={30} />
        <TextInput
          style={styles.email_input}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Gap height={40} />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text_button}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view_register}>
        <Text style={styles.text_register}>
          don't have account ? <Link to={{screen: 'Register'}}> register </Link>{' '}
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
    marginBottom: '30%',
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
    paddingHorizontal: 155,
    paddingVertical: 9,
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
    marginTop:15
  },
  text_register: {
    color:"#404258",
    fontFamily:fonts.Regular,
    fontSize:16
  },
});

export default Login;
