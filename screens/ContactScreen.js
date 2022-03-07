import React, {useEffect} from 'react';
import { Avatar } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { View, StyleSheet,Button, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const HinhNenNghi = () => (
    <Avatar.Image size={100} source={require('../images/96948913.png')} />
  );

const HinhNenThai = () => (
  <Avatar.Image size={100} source={require('../images/MinhThai.jpg')} />
);
const ContactScreen = (props) =>  {
  useEffect (() =>props.navigation.setOptions ({
    headerLeft: ()=>
    <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
 
   }), [props.navigation]);
    return(
      <View style={styles.container}>
      <View>
        <Text style={styles.text3}>Trường Đại học Công Nghệ Đồng Nai</Text>
        <Text style={styles.text3}>Khoa Công nghệ</Text>
        <Text style={styles.text5}>Lập Trình Moblie</Text>
        <Text style={styles.text4}>GV: Đỗ Phúc Thịnh</Text>
      </View>
      <View style={styles.anh1}>
         <HinhNenThai/>
         <Text style={styles.text1} >Bùi Minh Thái</Text>
         <Text style={styles.text1} >  151901162</Text>
      </View>
      <View style={styles.anh2}>
         <HinhNenNghi/>
         <Text style={styles.text1} >Vũ Thành Nghị</Text>
         <Text style={styles.text1} >   151901403</Text>
      </View>
      <View style={styles.button1}>
      <Button title='Profile Minh Thái' onPress={() => Linking.openURL('https://www.facebook.com/minhthai.2507')}/>
      </View>
  
      <View style={styles.button}>
      <Button title='Profile Vũ Nghị' onPress={() => Linking.openURL('https://www.facebook.com/ng1h1')}/>
      </View>
      </View>
    )
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
     
    },
    button1: {
      marginTop: 50,
      marginLeft: 100,
      marginRight:100,
      borderRadius: 5,
      borderColor:'#3399ff',
      borderWidth: 1,
      
    },
    button: {
      marginTop: 20,
      borderWidth: 1,
      marginLeft: 110,
      marginRight:110,
      borderRadius: 5,
      borderColor:'#3399ff',
      backgroundColor: '#fff',
    },
    button2: {
      marginTop: 20,
      borderWidth: 1,
      borderColor:'#3399ff',
      marginLeft: 130,
      marginRight:130,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
    anh1:{
      marginLeft:60,
      marginTop: 50,
    },
    anh2:{
      marginLeft: 220,
      marginTop: -140,
    },
    text1:{
      fontSize: 17,
      alignItems: 'center',
    },
    text3:{
      fontSize: 20,
      alignSelf: 'center',
      marginTop: 20,
      color: 'red'
    },text4:{
      fontSize: 17,
      marginLeft: 20,
      marginTop: 20,
      color: 'blue'
    },text5:{
      fontSize: 19,
      marginLeft: 20,
      marginTop: 20,
      color: 'blue'
    },
  
  });
export default  ContactScreen;