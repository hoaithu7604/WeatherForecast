import {StyleSheet} from 'react-native';
import GLOBALS from '../../Globals';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 15;

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
  inputContainerStyle: {
    borderRadius: 5,
  },
  itemText: {
    margin: 2,
    fontSize: 15,
  },
});
