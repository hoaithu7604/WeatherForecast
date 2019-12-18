import React, {Component} from 'react';
import {Animated, View, Text, Image} from 'react-native';
import styles from './styles';
import ICON from '../../assets/icon.png';
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 1000}).start(
      () => {
        Animated.timing(this.state.fadeAnim, {
          toValue: 0,
          duration: 300,
        }).start(() => {
          this.props.navigation.navigate('Home');
        });
      },
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity: this.state.fadeAnim}}>
          <Image source={ICON} style={{width: 200, height: 200}} />
          <Text style={styles.text}>WEATHER FORECAST</Text>
        </Animated.View>
      </View>
    );
  }
}
export default SplashScreen;
