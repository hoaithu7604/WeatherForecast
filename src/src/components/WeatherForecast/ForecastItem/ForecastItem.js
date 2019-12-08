import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Globals from '../../../Globals';
const ForecastItem = props => {
  const {data, index, handlePress, isSelected} = props;
  const date = new Date(data.dt * 1000);
  const temp = new Date();
  const imageUrl = Globals.iconUrl(data.weather[0].icon);
  return (
    <TouchableOpacity
      onPress={() => handlePress(index)}
      style={[styles.container, isSelected === true ? styles.selected : null]}>
      <Image style={styles.icon} source={{uri: imageUrl}} />
      <Text>
        {date.getHours()}:00 {Globals.DAY[date.getDay()]}
      </Text>
      <Text>
        {date.getDate()} {Globals.MONTH[date.getMonth()]}
      </Text>
    </TouchableOpacity>
  );
};
export default ForecastItem;
