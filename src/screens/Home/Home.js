import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../../components/molecules/Header/Header';
import {
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Cauliflawer_PNG,
  IL_Grapes_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
} from '../../res/images';
import BoxItemCategories from '../../components/molecules/BoxItemCategories/BoxItamCaterories';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* Header */}
        <Header drawer />
        <ScrollView>
          {/* Search */}
          <View style={styles.SearchHeader}>
            <View style={styles.SearchView}>
              <TextInput placeholder="Search" style={styles.InputSearch} />
              <IC_Search />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* categories */}
      <View>
        <Text style={styles.titleCategories}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewCategories}>
          <BoxItemCategories
            icon={<IC_Fruits />}
            color="rgba(169, 178, 169, 0.5)"
            text="Fruits"
            onPress={() => navigation.navigate('Categories', 'Fruits')}
          />
          <BoxItemCategories
            icon={<IC_Vegetables />}
            color="rgba(233, 255, 210, 0.5)"
            text="Vegetables"
            onPress={() => navigation.navigate('Categories', 'Vegetables')}
          />
          <BoxItemCategories
            icon={<IC_Drinks />}
            color="rgba(140, 175, 53, 0.5)"
            text="Drinks"
            onPress={() => navigation.navigate('Categories', 'Drinks')}
          />
          <BoxItemCategories
            icon={<IC_Bakery />}
            color="rgba(214, 255, 218, 0.5)"
            text="Bakery"
            onPress={() => navigation.navigate('Categories', 'Bakery')}
          />
          <BoxItemCategories
            icon={<IC_Bakery2 />}
            color="rgba(255, 250, 204, 0.5)"
            text="Bakery"
            onPress={() => navigation.navigate('Categories', 'Bakery')}
          />
        </ScrollView>
      </View>
      <Gap height={24} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  SearchHeader: {
    paddingHorizontal: 20,
  },
  SearchView: {
    height: 40,
    backgroundColor: '#DDDDDD',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
});

export default Home;
