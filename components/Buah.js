import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';
import { render } from 'react-dom';


export default class Buahk extends Component {
  render(){
  return (
    <View style={styles.container}>
      <View style={{
        width: 100,
        height: 25,
        position: 'relative',
        alignSelf: 'flex-start',
        bottom: 30,
        left: 30,
      }}><TouchableOpacity 
      onPress={() => this.props.navigation.goBack()}>
      <Text style={{
        fontSize: 25,
        color: 'white',
        alignSelf:'flex-start',
        position: 'relative',
      }}><Icon type="FontAwesome" name='arrow-left' style={{color: 'white'}}/> Kembali</Text>
      </TouchableOpacity></View>
      <View style={styles.header}>
        <Text style={{
          fontSize: 30,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}>ini teks buat nama</Text>
        <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif-light'
        }}>ini teks buat nama latin</Text>
        </View>
      <View style={styles.isiK}>
        <SafeAreaView>
        <View style={{
          backgroundColor: 'white',
          alignItems: 'center',
          alignSelf: 'center',
          width: 350,
          height: 500,
          position: 'relative',
          bottom: 15,
        }}><Text>ini teks buat keterangan</Text>
          </View>
          </SafeAreaView>
          <View style={{
              backgroundColor: 'black',
              width: 170,
              height: 170,
              alignSelf: 'flex-end',
              position: 'relative',
              bottom: 690,
              right: 20,
            }}></View>
      </View>
    </View>
  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1BBC9B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isiK:{
    backgroundColor: '#E2FFF9',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: 380,
    height: 550,
    position: 'relative',
    top: 80,
  },
  header: {
    width: 200,
    height: 80,
    position: 'relative',
    top: 10,
    left: 30,
    backgroundColor: 'red',
    alignSelf: 'flex-start'
  },
});