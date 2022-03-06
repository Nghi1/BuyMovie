import React, {useEffect} from 'react';
import { View,Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native';

import {Entypo} from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Avatar, Card,Button, Title, Paragraph, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 const LeftContent = props => <Avatar.Icon {...props} icon="filmstrip" />
    const theme = {
        ...DefaultTheme,
        roundness: 2,
        colors: {
          ...DefaultTheme.colors,
          primary: '#58ACFA',
          accent: '#f1c40f',
        },
      };
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
        <PaperProvider theme={theme}>
            <Card style={{margin:10}} >
              <Card.Title title={product.name} subtitle={product.nam} left={LeftContent} />
              <Card.Cover style={{width:355, height:200}} source={{ uri: product.image1}} />
              <Card.Content>
                <Title>{product.nametag}</Title>
                <Paragraph style={{marginTop:20}}>{product.cotTruyen}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" onPress={() => Linking.openURL(product.trailer)}>TRAILER</Button>
                <Button mode="contained" onPress={()=>addToCart()} style={{marginLeft:10}}>ADD TO CART</Button>
              </Card.Actions>
            </Card>
          </PaperProvider>
      )
  };
  
const styles = StyleSheet.create({
   
  });
  export default DetailScreen;
