import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TouchableHighlight, Image} from 'react-native';
import { Icon } from 'native-base';


export default class Beranda extends Component {
  render() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Tanaman apa yang ingin anda tanam ?</Text>
          <View style={styles.button}>
            <TouchableOpacity 
                      onPress={() => this.props.navigation.navigate('Hasil')}>
          <Text style={{
            paddingVertical: 5,
            fontSize: 25,
            fontWeight: 'bold',
            color: "#1BBC9B",
            alignSelf: 'center'
          }}>Mulai Survei  <Icon type="FontAwesome" name='arrow-right' style={{color: '#1BBC9B'}}/></Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.badan}>
          <SafeAreaView>
            <ScrollView>
              <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Isi')}>
                    <Image source={require('../src/Buah/apple.png')} style={styles.buatBuah}/>
                    <Text style={styles.TextBuah}>Apple</Text>
                    </TouchableOpacity>
                  </View>
                    <View style={styles.boxContent}>
                      <Image source={require('../src/Buah/avocado.png')} style={styles.buatBuah}/>
                      <Text style={styles.TextBuah}>Avocado</Text>
                    </View>
                </View>
                <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>
                <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>
                <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>
                <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>
                <View style={{
                flexDirection: 'row'}}>
                  <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>

          </ScrollView>
          </SafeAreaView>
        </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BBC9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_header: {
    paddingTop: 90,
    paddingVertical: 50,
    paddingHorizontal: 15,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 100,
    justifyContent:'flex-start',
  },
  TextBuah:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  buatBuah:{
    width: 100,
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'contain',
    alignSelf:'center'
  },
  boxContent:{
    width : 147,
    height : 164,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20,
    backgroundColor : 'white',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  button:{
    width: 237,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#E2FFF9',
  },
header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  badan:{
    flex: 2,
    backgroundColor: '#E2FFF9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 3,

  }
});
