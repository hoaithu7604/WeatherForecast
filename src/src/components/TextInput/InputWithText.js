import React,{Component} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import * as cityList from '../../assets/vn.city.list.json';
import Autocomplete from 'react-native-autocomplete-input';

import styles from './styles';

class InputWithText extends Component{
    static renderCity(city) {
        const { name} = city;
    
        return (
          <View>
            <Text style={styles.titleText}>{name}</Text>
          </View>
        );
      }
    constructor(props)
    {
        super(props);
        this.state = {
            query: '' 
        }
    }
    getCity(text)
    {
        console.log('finding');
        console.log(this.findCity('Vinh')[0].name);
    };
    findCity(query){
        if (query===''){
            return [];
        }
        const regex = new RegExp(`${query.trim()}`, 'i');
        return cityList.cityList.filter(city=>city.name.search(regex)>=0);
    }
    render(){
        const { query } = this.state;
        const cities = this.findCity(query);
        const {buttonText,onChangeText} = this.props;
        const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

        return (
            <View style = {styles.container}>
                <Text style={styles.buttonText}>{buttonText}</Text>
                <View style = {styles.border}/>
                <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles1.autocompleteContainer}
          data={cities.length === 1 && comp(query, cities[0].name) ? cities : cities}
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Star Wars film title"
          renderItem={(city) => (
            <TouchableOpacity onPress={() => this.setState({ query: city.name })}>
              <Text style={styles1.itemText}>
                {city.name} {city.id}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {cities.length > 0 ? (
            InputWithText.renderCity(cities[0])
          ) : (
            <Text style={styles.infoText}>
              Enter Title of a Star Wars movie
            </Text>
          )}
        </View>

            </View>
            ) 
    }
}

const styles1 = StyleSheet.create({
    container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      paddingTop: 25
    },
    autocompleteContainer: {
      flex: 1,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1
    },
    itemText: {
      fontSize: 15,
      margin: 2,
      color:'#FF0000',
    },
    descriptionContainer: {
      // `backgroundColor` needs to be set otherwise the
      // autocomplete input will disappear on text input.
      backgroundColor: '#F5FCFF',
      marginTop: 25
    },
    infoText: {
      textAlign: 'center'
    },
    titleText: {
      fontSize: 18,
      fontWeight: '500',
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'center'
    },
    directorText: {
      color: 'grey',
      fontSize: 12,
      marginBottom: 10,
      textAlign: 'center'
    },
    openingText: {
      textAlign: 'center'
    }
  });
export default InputWithText;