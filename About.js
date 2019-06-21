import React, { Component } from 'react';
import { StyleSheet, View,TouchableHighlight ,Text, Image} from 'react-native';
import Header from './Header';

export default class About extends Component {

  render() {
    return (
        <View style={styles.containerMain}>
            <Header judul={"PROFIL SAYA"} />
                <View style={styles.box02}>
                    <Image  style={styles.gambar}
                    source={{uri:'https://scontent.fdps3-1.fna.fbcdn.net/v/t1.0-9/21743068_924285041058228_2742253300892014465_n.jpg?_nc_cat=104&_nc_eui2=AeG36sI7wL2cIgj_H_nCiIPXQXIsutEPPSv7P64kSR93kiMiU1BCciNgyNnqEZf0Wb_kmH1ci9E6mYd2k-YiT-aVNm-4-Jn1eWOfhv44x8aBUQv-iiShb1TafT2htNjuVjM&_nc_ht=scontent.fdps3-1.fna&oh=5ba569089e2082b4ef2eef913b8b9898&oe=5D84C46B'}}
                    />
                    </View>
                    <View style={styles.label1}>
                        <Text style={styles.label2}>Nama  : I Gede Widiada Adi Braneva</Text>
                        <Text style={styles.label2}>Tanggal Lahir: 30 November 1999</Text>
                        <Text style={styles.label2}>Alamat : Desa Tajun, Kabupaten Buleleng</Text>
                    </View>
                    <View style={styles.box5}>           
      <TouchableHighlight              
       onPressIn={() => this.props.navigation.navigate('Home')}               
       accessibilityLabel="Home"               
       style={styles.vItemMenu}>                 
        <Text style={styles.text3}>Back</Text>             
    </TouchableHighlight>         
    </View>   
                    </View>
  
     
           
        
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: "#FF69B4",
    },

    box02: {
        flex:5,
        alignItems:'center',
        justifyContent:'center', 
        backgroundColor: "#FF69B4",
        borderRadius:20
    },
   
    gambar: {
        width: 250,
        height: 270,
        backgroundColor: "#FF69B4",
    },
    label1: {
        flex:4,
        alignItems:'stretch',  
        justifyContent:'center',
        backgroundColor: "#FF69B4",
        margin:5
    },
    label2: {
        borderWidth:1,
        fontSize:15, 
        paddingLeft:10, 
        paddingTop:10,
        paddingRight:10,
        backgroundColor: "#FF69B4",
        paddingBottom:10
    },
    center1: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FF69B4",
    },
    teks1: {
        fontSize: 20,
        color: 'white',
      },
      box4: {     
        flex:0.7,    
        backgroundColor: "#DC143C",     
        alignItems: 'center',
        justifyContent: 'center'  
    },   
    text3:{     
        fontSize:20,     
        color:'white', 
        alignItems: 'center',
        justifyContent: 'center'
      }, 
      vItemMenu:{    
        backgroundColor:"blue",      
        alignItems:'center',     
        justifyContent:'center',  
        paddingBottom : 10,   
        paddingTop : 10,
        borderRadius: 10,     
    },   
    box5: {     
        flex:0.7,      
        margin: 10,     
        borderRadius: 10,   
    },   
})
