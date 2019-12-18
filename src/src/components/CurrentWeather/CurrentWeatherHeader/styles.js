import {StyleSheet} from 'react-native';
import Globals from '../../../Globals';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  headerInfo: {
    flexDirection: 'column',
  },
  headerInfoMainText: {
    fontSize: Globals.FONTSIZE_LARGE,
    fontWeight: 'bold',
  },
  headerInfoDetailText: {
    fontSize: Globals.FONTSIZE_SMALL,
  },
  icon: {
    height: '100%',
    aspectRatio: 1,
  },
  temp: {
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    marginRight: 20,
  },
});
