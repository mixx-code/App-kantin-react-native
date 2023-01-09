import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import home from './src/images/icons/home.png';
import time from './src/images/icons/time.png';
import history from './src/images/icons/history.png';
export default class Footer extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 15,
          paddingHorizontal: 25,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image style={{width: 20, height: 17.78}} source={home} />
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 20}}>
          <View style={styles.wrapper}>
            <Image style={{width: 20, height: 20}} source={time} />
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#FF5252',
                borderRadius: 8,
                position: 'absolute',
                top: 0,
                right: 8,
                borderWidth: 1,
                borderColor: '#ffffff',
              }}></View>
            <Text>Proses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image style={{width: 20, height: 15.56}} source={history} />
            <Text>Transaksi</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {alignItems: 'center', position: 'relative'},
});
