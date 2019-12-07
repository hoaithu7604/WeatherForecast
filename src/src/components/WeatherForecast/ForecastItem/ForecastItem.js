import {View} from 'react-native';
import React from 'react';
import styles from './styles';
const ForecastItem = props => {
  const {data} = props;
  console.log(data.dt + ' ' + data.dt_txt);
  return <View style={styles.container} />;
};
export default ForecastItem;
