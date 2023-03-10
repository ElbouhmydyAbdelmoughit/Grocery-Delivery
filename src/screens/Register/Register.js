import React, {useState} from 'react';
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
import {IM_Register} from '../../res/images/Illustrations';

const Register = ({navigation}) => {
  const [register, setRegister] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name,value) => {
    setRegister({...register, [name]:value});
  };

  const handleSubmit  = (e)=>{
    e.preventDefault();
    console.log(register)
  }

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
      <Image style={{width: '100%', height: 200}} source={IM_Register} />
      <View style={styles.header}>
        <View style={styles.title_view}>
          <Text style={styles.text_title}>Welcome</Text>
        </View>
        <TextInput
          style={styles.full_name_input}
          value={register.fullName}
          onChangeText={(text) => handleChange('fullName', text)}
          placeholder="Enter Full Name"
        />
        <Gap height={20} />
        <TextInput
          style={styles.email_input}
          value={register.email}
          onChangeText={(text) => handleChange('email', text)}
          placeholder="Enter Email"
        />
        <Gap height={20} />
        <TextInput
          style={styles.email_input}
          value={register.password}
          onChangeText={(text) => handleChange('password', text)}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Gap height={20} />
        <TextInput
          style={styles.email_input}
          value={register.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <Gap height={30} />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit }>
            <Text style={styles.text_button}>Register</Text>
          </TouchableOpacity>
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
  register_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
  },
  register: {
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
  full_name_input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  email_input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  title_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 45,
  },
  text_title: {
    fontFamily: fonts.Bold,
    fontSize: 30,
    color: '#0FA956',
  },
  register_title: {
    color: '#0FA956',
    fontFamily: fonts.Bold,
    fontSize: 30,
  },
  sub_register_title: {
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
});

export default Register;
