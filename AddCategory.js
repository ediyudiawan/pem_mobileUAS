import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class AddCategory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama_obat: "",
      manfaat: "",
      dikonsumsi_oleh: "",
      idkategori: "",
      idgolongan: "",
      idbentuk: ""
    }
  }

  _simpan = () => {
    axios.post('https://edi4b104.000webhostapp.com/obat/tambahObat.php', {
      nama_obat: this.state.nama_obat,
      manfaat: this.state.manfaat,
      dikonsumsi_oleh: this.state.dikonsumsi_oleh,
      idkategori: this.state.idkategori,
      idgolongan: this.state.idgolongan,
      idbentuk: this.state.idbentuk,
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
         <Header judul={"SISTEM MANAJEMEN OBAT"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Nama Obat : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(nama_obat) => this.setState({ nama_obat })}
              value={this.state.nama_obat}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Manfaat : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(manfaat) => this.setState({ manfaat })}
              value={this.state.manfaat}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Dikonsumsi Oleh : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(dikonsumsi_oleh) => this.setState({ dikonsumsi_oleh })}
              value={this.state.dikonsumsi_oleh}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Id Kategori : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(idkategori) => this.setState({ idkategori })}
              value={this.state.idkategori}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Id Golongan : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(idgolongan) => this.setState({ idgolongan })}
              value={this.state.idgolongan}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
            <View style={{ width: '30%' }}>
              <Text>Id Bentuk : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(idbentuk) => this.setState({ idbentuk })}
              value={this.state.idbentuk}
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
            <Text style={{ fontSize: 24, color: 'white' }}>SIMPAN OBAT</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
