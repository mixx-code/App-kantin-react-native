import {ScrollView, Text, SafeAreaView, FlatList, View} from 'react-native';
import React, {Component} from 'react';
import Navbar from './Navbar';
import Kategori from './Kategori';
import CardItem from './CardItem';
import Footer from './Footer';
const products = [
  {
    keys: 1,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 2,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 3,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 4,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 4,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 4,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
  {
    keys: 4,
    image:
      'https://cdn.pixabay.com/photo/2019/09/26/18/23/republic-of-korea-4506696_960_720.jpg',
    namaMakanan: 'Ayam goreng',
    namaKios: 'Kios Ibu Caca',
    harga: 'Rp, 15. 000',
  },
];

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: '#F6FFF5'}}>
          <Navbar />
          <Kategori />
          <SafeAreaView style={{flex: 1}}>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 20,
                marginBottom: 10,
              }}>
              Untukmu
            </Text>
            <FlatList
              numColumns={2}
              data={products}
              style={{flex: 1}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => <CardItem product={item} />}
            />
          </SafeAreaView>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
