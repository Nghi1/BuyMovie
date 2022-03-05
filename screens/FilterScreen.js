import React, {useEffect} from 'react';
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

const FilterScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
        headerLeft: ()=>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
     
       }), [props.navigation]);
    return(
        <View>
            <Text>FilterScreen</Text>
        </View>
      )
  };
  
const styles = StyleSheet.create({ 
});
  export default FilterScreen;
