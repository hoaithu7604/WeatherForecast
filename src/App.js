import React,{Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
const styles = StyleSheet.create({
  App:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  Title:{
    fontSize:50,
    color: '#1278AA'
  }
});
export default class App extends Component 
{
  render()
  {
    return( 
    <View style={styles.App}>
      <Text style={styles.Title}>Weather Forecast</Text>
    </View>
    );
  }
}
