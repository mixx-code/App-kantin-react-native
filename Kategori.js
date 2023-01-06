import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import makanan from './src/images/icons/makanan.png';
import minuman from './src/images/icons/minuman.png';
import kios from './src/images/icons/kios.png';

export default function Kategori() {
  return (
    <View style={{marginVertical: 20}}>
      <Text style={styles.kategori}>Kategori</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image style={styles.icon} source={makanan} />
            <Text>Makanan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image style={styles.icon} source={minuman} />
            <Text>Minuman</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image style={{width: 34, height: 30.77}} source={kios} />
            <Text>Kios</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  kategori: {fontSize: 15, color: 'black', marginLeft: 20, marginBottom: 20},
  icon: {width: 25, height: 30.77},
  wrapper: {alignItems: 'center'},
});
