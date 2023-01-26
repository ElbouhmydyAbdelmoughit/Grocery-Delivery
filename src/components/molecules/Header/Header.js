import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IC_Back, IC_Cart, IC_Drawer} from '../../../res/images';

const Header = ({drawer, back, cart, onPress}) => {
  if (drawer) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Drawer />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <IC_Cart />
        </TouchableOpacity>
      </View>
    );
  }
  if (back && cart) {
    return (
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={onPress}>
          <IC_Back />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <IC_Cart />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.wrapperHeader}>
      <TouchableOpacity onPress={onPress}>
        <IC_Back />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default Header;
