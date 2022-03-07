import React, {useEffect} from 'react';
import { View,Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux';

const CartScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
         headerLeft: ()=>
         <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
      
        }), [props.navigation]);
        const cartProducts= useSelector((state)=>state.cartProducts)
        if(cartProducts.length !=0)
    return(
        <FlatList
        data={cartProducts}
        renderItem={({item})=><TouchableOpacity 
        onPress={() => props.navigation.navigate('DetailScreen', {productId: item.id})}>
        <View style={styles.view}>
            <Image style={styles.image} source={item.image1}/>
            <Text style={styles.text}>{item.name}</Text>
        </View></TouchableOpacity>}
        keyExtractor={item=>item.id}
        />
      )
      else 
      {
          return(
              <Text style={{fontSize:30, textAlign: 'center'}}>Nothing Found!</Text>
          )
      }
  };
  
const styles = StyleSheet.create({
    view:{
        alignItems: 'center'
},
image:{
    width:355,
    height:200
},
text:{
    margin: 10,
}
  });
  export default CartScreen;
