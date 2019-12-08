import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    aspectRatio: 1,
    marginRight: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '30%',
    height: '30%',
    resizeMode: 'stretch',
  },
  selected: {
    backgroundColor: 'rgba(255,1255,255,0.65)',
  },
});
