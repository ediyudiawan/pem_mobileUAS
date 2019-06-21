import React, { Component } from 'react';
import { StyleSheet,TouchableHighlight, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Header from './Header';

export default class Objek extends Component {
  constructor(props) {
    super(props)
    prefik_url = '';

    this.state = {
      detail: [],
    };
  }
  componentDidMount() {
    const id = this.props.navigation.state.params.id
    axios.get(`https://edi4b104.000webhostapp.com/obat/getObat.php?idobat=` + id)
      .then(res => {
        const detail = res.data;
        console.log(detail);
        this.setState({ detail });
      })
  }

  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
    <ListItem
      title={item.manfaat}
    />
  )
  render() {
    const title = this.props.navigation.getParam('title', 'NO-TITLE');

    return (
      <View style={styles.container} >
        <Header judul={"DETAIL OBAT"} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.detail}
          renderItem={this.renderItem}
        />
        <View style={styles.box5}>
         <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('Delete')}>
            <Text style={styles.buttonText}>Delete</Text>
            </TouchableHighlight>

            </View>
            <View style={styles.box6}>
            </View>
       <ActionButton buttonColor="blue">
          <ActionButton.Item buttonColor='#9b59b6' title="Ubah Daftar ATK" onPress={() => this.props.navigation.navigate('Update')}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box4: {
    flex:0.2,
    backgroundColor: "#DC143C",
    alignItems: 'center',
    justifyContent: 'center'
},
box5: {
  flex:1,
  backgroundColor: "white",
  alignItems: 'center',
  justifyContent: 'center'
},
box6: {
  flex:0.5,
  backgroundColor: "white",
  alignItems: 'center',
  justifyContent: 'center'
},
text3:{
    fontSize:20,
    color:'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  button2Style: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom : 40,
    paddingTop : 30,
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: "#DC143C",
    height: 50,
    width: 300,
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
},
buttonText: {
    textAlign: "center",
    height: 25,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
},
});
