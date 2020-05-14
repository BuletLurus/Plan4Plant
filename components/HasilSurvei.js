import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground ,TouchableOpacity,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'native-base';

export default class HasilSurvei extends Component {
    render(){
        return (
          <View style={styles.container}>
              <View>
                  <Text style={{
                      fontFamily: 'sans-serif-medium',
                      color: 'white',
                      fontSize: 40,
                      position: 'relative',
                      top : 30,
                      right: 80, 
                  }}>Hasil Survei</Text>
              </View>
              <View style={styles.box}>
                  <View>
                      <SafeAreaView style={{
                          backgroundColor: 'red',
                          position: "absolute",
                          width : 177,
                          height: 130,
                          top: 40,
                          left: 40,
                      }}>
                          <Text>INI BUAT PENJELASAN SINGKAT BUAH</Text>
                      </SafeAreaView>
                      <SafeAreaView style={{
                          backgroundColor: 'yellow',
                          position: 'absolute',
                          width : 150,
                          height: 150,
                          left: 220,
                          top: 30,
                      }}><Text>INI BUAT FOTO BUAH</Text></SafeAreaView>
                      <SafeAreaView style={{
                          backgroundColor: 'green',
                          position: 'absolute',
                          width : 330,
                          height: 350,
                          left: 40,
                          top: 185,
                      }}><Text>INI BUAT PENJELASAN HASIL SURVEI</Text></SafeAreaView>
                      <View style={styles.button}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{
                            paddingVertical: 5,
                            fontSize: 25,
                            color: "#E2FFF9",
                            alignSelf: 'center'
                        }}>Selesai</Text>
                        </TouchableOpacity>
                        </View>
                  </View>
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
    box: {
        backgroundColor: '#E2FFF9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        width: 410,
        height: 654,
        position: 'relative',
        top: 108,
    },
    button:{
      width: 237,
      height: 40,
      borderRadius: 30,
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#1BBC9B',
      position: 'absolute',
      top: 560,
    },
});