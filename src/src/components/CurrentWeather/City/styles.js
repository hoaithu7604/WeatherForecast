import {StyleSheet} from 'react-native';
import Globals from '../../../Globals';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  cityName: {
    fontSize: Globals.FONTSIZE_LARGE,
    fontWeight: '200',
  },
});
