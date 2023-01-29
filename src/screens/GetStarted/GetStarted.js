import {Link} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View, Linking} from 'react-native';
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
      <Button
        text="Get Started"
        onPress={() => navigation.navigate('MainApp')}
      />
      <Gap height={20} />
      <View style={styles.login_view}>
        <Text style={styles.login_text}>
          Want To Login <Link to={{screen: 'Login'}}> Click Here </Link> ?
        </Text>
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
  login_view:{
    paddingHorizontal:5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  login_text: {
    
    fontFamily: fonts.Regular,
    color:"black",
    fontSize: 16
  },
});

export default GetStarted;
