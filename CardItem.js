import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class CardItem extends Component {
  render() {
    const {image, namaMakanan, namaKios, harga} = this.props.product;
    return (
      <TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 20,
            width: 157,
            height: 166,
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
            borderRadius: 5,
            marginBottom: 10,
          }}>
          <Image
            source={{uri: image}}
            style={{
              width: 157,
              height: 108,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
              {namaMakanan}
            </Text>
            <Text style={{fontSize: 7, fontWeight: '700'}}>{namaKios}</Text>
            <Text style={{fontSize: 18, fontWeight: '900', color: '#FF5252'}}>
              {harga}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
