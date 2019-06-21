import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class AddCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kode_atk: "",
      id_kategori: "",
    }
  }

  _simpan = () => {
    axios.post('https://widhybraneva.000webhostapp.com/atk/hapusAtk.php', {
      kode_atk: this.state.kode_atk,
      id_kategori: this.state.id_kategori,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
         <Header judul={"SISTEM INVENTORI ATK"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Kode ATK : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(kode_atk) => this.setState({ kode_atk })}
              value={this.state.kode_atk}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Id Kategori : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(id_kategori) => this.setState({ id_kategori })}
              value={this.state.id_kategori}
            />
          </View>

      

          <TouchableHighlight
            style={{
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF5722'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Category')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>HAPUS DATA</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
