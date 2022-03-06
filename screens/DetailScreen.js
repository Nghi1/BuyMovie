import React, {useEffect} from 'react';
import { View,Text, StyleSheet, Image, Button, Linking, TouchableOpacity} from 'react-native';

import {Entypo} from '@expo/vector-icons';
import PRODUCTS from '../data/products';

const DetailScreen = (props) => {
    const{productId}=props.route.params;
  const product=PRODUCTS.find(item=>item.id===productId)
  useEffect (() =>props.navigation.setOptions ({
     headerRight: ()=><TouchableOpacity>
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
