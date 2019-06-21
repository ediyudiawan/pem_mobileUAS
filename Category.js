import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Category extends Component {
  constructor(props) {
    super(props)
    prefik_url = 'https://cf.shopee.co.id/file/';
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios.get(`https://widhybraneva.000webhostapp.com/atk/getKategoriAtk.php`)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem 
      title={item.nama_kategori}
      leftAvatar={{ source: { uri: prefik_url + item.gambar } }}
      onPress={
        () => {
          this.props.navigation.navigate('Objek', { id: item.id_kategori, title: item.nama_atk })
        }
      }
    />
  )
  render() {
    return (
      <View style={styles.container} >
        <Header judul={"SISTEM INVENTORI ATK"} />
        <FlatList 
          keyExtractor={this.keyExtractor}
          data={this.state.categories}
          renderItem={this.renderItem}
        />


    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
