import React, {useEffect} from 'react';
import { View,Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';    

import CATEGORIES from '../data/categories';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
        headerLeft: ()=>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
     
       }), [props.navigation]);
    return(
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) =>
          <TouchableOpacity onPress={()=>props.navigation.navigate('ProductsScreen', {categoryId: item.id})}><View style={[styles.view, {backgroundColor: item.color}]}>
              <Text style={styles.text} >{item.name}</Text>
            </View></TouchableOpacity>
          
          }
          keyExtractor={item => item.id}  
        />
      )
  };
  
const styles = StyleSheet.create({view: {
    borderWidth: 2,
    padding: 10,
    margin: 10
},
text:{
  fontSize: 30,
  alignSelf: 'center',
},
});
  export default HomeScreen;
