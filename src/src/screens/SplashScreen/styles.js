import {StyleSheet} from 'react-native';
import Globals from '../../Globals';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Globals.PRIMARY_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'monospace',
    fontSize: Globals.FONTSIZE_LARGE + 5,
    color: 'rgba(255,255,255,0.8)',
  },
});
