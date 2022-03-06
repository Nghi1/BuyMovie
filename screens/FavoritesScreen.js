import React, {useEffect} from 'react';
import { View,Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';

import PRODUCTS from '../data/products';
import Ionicons from '@expo/vector-icons/Ionicons';

const FavoritesScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
         headerLeft: ()=>
         <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
      
        }), [props.navigation]);
    const favProducts=PRODUCTS.filter(product=>product.isFav===true)
    return(
        <FlatList
        data={favProducts}
        renderItem={({item})=><View style={styles.view}>
            <Image style={styles.image} source={item.image1}/>
            <Text style={styles.text}>{item.name}</Text>
        </View>}
        keyExtractor={item=>item.id}
        />
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
    margin: 10,
}
  });
  export default FavoritesScreen;
