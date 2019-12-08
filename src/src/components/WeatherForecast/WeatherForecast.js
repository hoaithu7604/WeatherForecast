import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import styles from './styles';
import SelectedForecast from './SelectedForecast/SelectedForecast';
import ForecastItem from './ForecastItem/ForecastItem';
class WeatherForecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: -1,
    };
  }

  handlePress = index => {
    console.log(index);
    this.setState({selectedIndex: index});
  };

  render() {
    const {data} = this.props;
    const {selectedIndex} = this.state;
    const temp = [];
    return (
      <View style={styles.container}>
        <View style={styles.selectedContainer}>
          <SelectedForecast />
        </View>
        <SafeAreaView style={styles.listContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.list
              ? data.list.map((data, index) => (
                  <ForecastItem
                    data={data}
                    isSelected={index === selectedIndex}
                    index={index}
                    handlePress={this.handlePress}
                    key={data.dt}
                  />
                ))
              : null}
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}
export default WeatherForecast;
