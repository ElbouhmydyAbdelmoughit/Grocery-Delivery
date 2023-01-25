import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IC_Favorite,
  IC_Favorite_color,
  IC_Home,
  IC_Home_color,
  IC_Notification,
  IC_Notification_color,
  IC_Profile,
  IC_Profile_color,
} from '../../../res/images';

const Icon = ({label, isFocused}) => {
  switch (label) {
    case 'Home':
      return isFocused ? <IC_Home_color /> : <IC_Home />;
    case 'Favorite':
      return isFocused ? <IC_Favorite_color /> : <IC_Favorite />;
    case 'Notification':
      return isFocused ? <IC_Notification_color /> : <IC_Notification />;
    case 'Profile':
      return isFocused ? <IC_Profile_color /> : <IC_Profile />;
    default:
      return <IC_Home_color />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon label={label} isFocused={isFocused} />
            {/* <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "white",
    paddingVertical:28,
    paddingLeft: 50,
  },
});

export default BottomNavigator;
