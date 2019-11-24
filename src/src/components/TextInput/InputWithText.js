import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as cityList from '../../assets/vn.city.list.json';
import Autocomplete from 'react-native-autocomplete-input';

import styles from './styles';
//convert tieng viet co dau thanh khong dau
function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ|Ð|ð/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' ',
  );
  str = str.replace(/ + /g, ' ');
  str = str.trim();
  return str;
}
class InputWithText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  findCity(query) {
    if (query === '') {
      return [];
    }
    const regex = new RegExp(`${change_alias(query).trim()}`, 'i');
    return cityList.cityList.filter(
      city => change_alias(city.name).search(regex) >= 0,
    );
  }
  render() {
    const {query} = this.state;
    const cities = this.findCity(query);
    const {onChangeText} = this.props;
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.containerStyle}
        listContainerStyle={styles.listContainer}
        data={
          cities.length === 1 && comp(query, cities[0].name) ? cities : cities
        }
        defaultValue={query}
        onChangeText={text => this.setState({query: text})}
        placeholder="Enter city"
        renderItem={({item, i}) => (
          <TouchableOpacity
            onPress={() => {
              this.setState({query: item.name});
              onChangeText(item.name);
            }}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}
export default InputWithText;
