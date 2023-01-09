import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';

const {width} = Dimensions.get('window');

export default class Carousel extends Component {
  render() {
    const {image, namaMakanan, namaKios, harga} = this.props.data;
    return (
      <TouchableOpacity>
        <View
          style={{
            height: 160,
            width: width * 0.8 - 20,
            marginHorizontal: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
            position: 'relative',
          }}>
          <Image
            source={{uri: image}}
            style={{
              height: 160,
              width: width * 0.8 - 20,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              flex: 1,
              position: 'absolute',
              width: width * 0.8 - 20,
              bottom: 0,
            }}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
              {namaMakanan}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
              {namaKios}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

{
  /* <FlatList
        data={data}
        keyExtractor={item => String(item)}
        horizontal
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            {' '}
            <Image source={{uri: item.image}} />
          </View>
        )}
      /> */
}
