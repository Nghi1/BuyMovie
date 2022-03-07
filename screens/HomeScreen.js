import React, {useEffect} from 'react';
import { View,Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from 'react-native';    

import CATEGORIES from '../data/categories';
import Ionicons from '@expo/vector-icons/Ionicons';
import companyLogo from '../images/movie-illustration-logo-vector-design-film-178252125.jpg';

const HomeScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
        headerLeft: ()=>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
       }), [props.navigation]);
       useEffect (() =>props.navigation.setOptions ({
        headerRight:()=>
        <div>
        <img width={60} height={60} src={companyLogo} alt="BigCo Inc. logo"/>
      </div>
       }), [props.navigation]);
    return(
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) =>
          <TouchableOpacity style={styles.background}
            onPress={() => props.navigation.navigate('ProductsScreen', {categoryId: item.id})}> 
            <View>
            <ImageBackground  style={styles.image} source={item.image} resizeMode="cover" >
                <Text style={styles.text} >{item.name}</Text>
                </ImageBackground>
            </View>
          </TouchableOpacity>
          
          }
          keyExtractor={item => item.id}  
        />
      )
  };
  
const styles = StyleSheet.create({  background: {
  marginTop: 10,
  marginLeft: 20,
  marginRight:20,
  marginBottom: 10,
  height: 180,
  borderRadius: 5,
  borderColor:'#000000',
  borderWidth: 1,

},

text:{
fontSize: 20,
marginTop: 151,
color: '#FFFFFF'
},
});
  export default HomeScreen;
