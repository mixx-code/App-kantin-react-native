import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import cart from './src/images/icons/cart.png';
import menu from './src/images/icons/menu.png';
import search from './src/images/icons/search.png';
export default function Navbar() {
  return (
    <View style={{height: 166, backgroundColor: '#4CAF50'}}>
      <View style={styles.navbar}>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.textInput}
            placeholder="Ayam goreng ..."
            placeholderTextColor={'#BDBDBD'}
          />
          <Image source={search} style={styles.search} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={{position: 'relative'}}>
              <Image source={cart} style={styles.icon} />
              <Text style={styles.notif}>10</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={menu} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20},
  textInput: {
    width: 250,
    height: 35,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingLeft: 35,
    fontSize: 12,
    color: 'black',
  },
  icon: {width: 25, height: 26.6, marginLeft: 20, marginTop: 2},
  notif: {
    fontSize: 12,
    width: 24,
    height: 24,
    backgroundColor: '#FF5252',
    padding: 4,
    borderRadius: 25,
    color: '#ffffff',
    position: 'absolute',
    top: -10,
    right: -10,
  },
  search: {width: 15, height: 15.96, position: 'absolute', left: 10, top: 8},
});
