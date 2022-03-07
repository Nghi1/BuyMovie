import React from 'react';
import { StyleSheet } from 'react-native';

import Navigation from './navigation/navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer)

const App=()=> {
  return(  
    <Provider store={store}>  
      <Navigation/>
    </Provider>
   )
};

const styles = StyleSheet.create({
});
export default App;