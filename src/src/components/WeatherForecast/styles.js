import {StyleSheet} from 'react-native';
import GLOBALS from '../../Globals';
export default StyleSheet.create({
  container: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    margin: 5,
    flexDirection: 'column',
  },
  selectedContainer: {
    flex: 2,
    backgroundColor: '#0000ff',
    width: '100%',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
});
