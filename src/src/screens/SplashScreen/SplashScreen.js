import React, {Component} from 'react';
import {Animated, View, Text} from 'react-native';
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 5000}).start();
  }
  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    );
  }
}
export default SplashScreen;
