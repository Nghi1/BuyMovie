import React, {useEffect} from 'react';
import { View,Text, StyleSheet, Image, Button, Linking, TouchableOpacity} from 'react-native';

import {Entypo} from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const DetailScreen = (props) => {
    const{productId}=props.route.params;
    const avaiProducts= useSelector((state)=>state.filterProducts)
  const product=avaiProducts.find(item=>item.id===productId)
  const dispatch= useDispatch()
  const addToFav=()=>{
      dispatch({type: 'ADD_TO_FAV', productId: productId})
  }
  const addToCart=()=>{
    dispatch({type: 'ADD_TO_CART', productId: productId})
}
  useEffect (() =>props.navigation.setOptions ({
     headerRight: ()=><TouchableOpacity onPress={()=>addToFav()}>
          <Entypo name='star' size={36} color='red'/>
    </TouchableOpacity>
    }), [props.navigation]);
    return(
        <View style={styles.view}>
            
            <Image style={styles.image} source={{ uri: product.image1}}/>
            <Text style={styles.text}>{product.name}</Text>
            <Text>{product.nam}</Text>
            <Text>{product.nametag}</Text>
            <Text style={styles.text}>{product.cotTruyen}</Text>
            <Button title='TRAILER'  onPress={() => Linking.openURL(product.trailer)}></Button>
            <Button title='ADD TO CART'  onPress={()=>addToCart()}></Button>
            </View>
      )
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
        marginTop: 10,
    }
  });
  export default DetailScreen;
