import {StyleSheet} from 'react-native';
import GLOBALS from '../../Globals';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 15;

export default StyleSheet.create({
  containerStyle: {
    width: '90%',
    zIndex: 1,
    position: 'absolute',
    //backgroundColor: '#000',
  },
  inputStyle: {
    borderRadius: 15,
    backgroundColor: '#fff',
    width: '100%',
    height: 40,
    fontSize: 15,
    paddingHorizontal: 20,
  },
  inputContainerStyle: {
    marginVertical: 5,
    borderColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: '#ff0000',
  },
  itemText: {
    margin: 2,
    fontSize: 15,
  },
  listContainerStyle: {
    maxHeight: 200,
    overflow: 'scroll',
    zIndex: 1,
  },
  listStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
