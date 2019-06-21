import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput, Platform, Image} from "react-native";
import Header from './Header';

export default class Home extends React.Component {
        render() {
            return (
            <View style={styles.container}>
                 <Header judul={"SISTEM MANAJEMEN OBAT"} />
                <View style={styles.box1}>
                <Image
                style={styles.gambar}
                source={{uri: "https://i0.wp.com/biofar.id/wp-content/uploads/2019/05/Strategi-Pengembangan-Apotek.jpg"}}
                resizeMode="contain"
                />
            <View style={styles.box3}>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('Category')}>
            <Text style={styles.buttonText}>LIHAT KATEGORI</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.button2Style}
        onPress={() => this.props.navigation.navigate('About')}>
            <Text style={styles.buttonText}>PROFIL</Text>
            </TouchableHighlight>
            <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}
        onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.buttonText1}>Log Out</Text>
            </TouchableHighlight>
        </View>
        </View>
        </View>

);
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FF69B4',

    },
    box1: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    vHeader: {
        flex:0.8,
        backgroundColor:'#194B95',
        alignItems:'center',
        justifyContent:'center',
        height:80,
        width:400,
    },   txtHeader: {
        fontSize:20,
        color : 'white'
    },
    gambar:{
        height:200,
        width:200,
        alignItems: "center"
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
    buttonStyle: {
        marginTop: 50,
        justifyContent: 'center',
        backgroundColor: "blue",
        height: 40,
        width: 100,
        borderRadius: 10,
        paddingBottom : 10,
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
    buttonText1: {
        textAlign: "center",
        height: 25,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 14
    },
    box3: {
        flex: 2,
        width: 10,
        paddingTop: 20,
        paddingBottom:50,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    textInput: {
        width: 300,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: 'black'
    },

});
