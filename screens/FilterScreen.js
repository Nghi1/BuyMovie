import React, {useEffect, useState} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,Switch} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

const FilterScreen = (props) => {
    useEffect (() =>props.navigation.setOptions ({
        headerLeft: ()=>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}><View><Ionicons name='ios-menu' size={40} color='black'/></View></TouchableOpacity>
     
       }), [props.navigation]);
        const [isBrandNew, setIsBrandNew] = useState(false);
        const [isSale, setIsSale] = useState(false);
        const dispatch=useDispatch()
        const filters={
          isBrandNew:isBrandNew,
          isSale: isSale
        }

       useEffect (() =>props.navigation.setOptions ({
        headerRight: ()=>
        <TouchableOpacity onPress={()=>dispatch({type:'FILTER_PRODUCTS',filters: filters})}>
            <Ionicons name='ios-save' size={32} />
        </TouchableOpacity>
       }), [props.navigation, isBrandNew, isSale]);
      
    return(
        <View>
             <Text style={styles.title}>Chọn bộ lọc</Text>
        <View style={styles.view}>
            <Text style={styles.text}>Hàng mới</Text>
            <Switch style={styles.switch}
             value={isBrandNew}
             onValueChange={newValue => setIsBrandNew(newValue)}
             />
        </View>
        <View style={styles.view}>
            <Text style={styles.text}>Hàng khuyến mãi</Text>
            <Switch style={styles.switch} 
            value={isSale}
            onValueChange={newValue => setIsSale(newValue)}
            />
        </View>
        </View>
      )
  };
  
const styles = StyleSheet.create({ title:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: 10,

},
text:{
  fontWeight: 'bold',
  fontSize: 15,
},
switch:{
  transform: [{ scaleX: 1.3}, {scaleY: 1.3}]
},
view:{
  margin: 10,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
save:{
  marginLeft: 190,

},
});
  export default FilterScreen;
