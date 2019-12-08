import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Globals from '../../../Globals';
const SelectedForecast = props => {
  const {data} = props;
  console.log(data);
  if (data) {
    const imageUrl = Globals.iconUrl(data.weather[0].icon);
    const date = new Date(data.dt * 1000);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{uri: imageUrl}} style={styles.icon} />
          <Text style={styles.headerTime}>{date.getHours()}:00</Text>
          <View style={styles.headerDescription}>
            <Text style={styles.headerDate}>
              {Globals.DAYL[date.getDay()]} {date.getDate()}{' '}
              {Globals.MONTHL[date.getMonth()]}
            </Text>
            <Text style={styles.headerWeather}>{data.weather[0].main}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <View style={styles.wind}>
            <View style={styles.subItemLeft}>
              <Text style={styles.subHeader}>WIND SPEED</Text>
              <Text style={styles.subText}>{data.wind.speed}m/s</Text>
            </View>
            <View style={styles.subItemLeft}>
              <Text style={styles.subHeader}>HUMIDITY</Text>
              <Text style={styles.subText}>{data.main.humidity}%</Text>
            </View>
          </View>
          <Text style={styles.mainTemp}>{data.main.temp}°</Text>
          <View style={styles.subTemp}>
            <View style={styles.subItemRight}>
              <Text style={styles.subHeader}>MIN TEMPERATURE</Text>
              <Text style={styles.subText}>{data.main.temp_min}°</Text>
            </View>
            <View style={styles.subItemRight}>
              <Text style={styles.subHeader}>MAX TEMPERATURE</Text>
              <Text style={styles.subText}>{data.main.temp_max}°</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else return <View />;
};
export default SelectedForecast;
