import {StyleSheet} from 'react-native';
import Globals from '../../../Globals';
export default StyleSheet.create({
  description: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subTemp: {
    flex: 1,
  },
  subItemRight: {
    flex: 1,
    borderLeftWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)',
    margin: 1,
    padding: 5,
    justifyContent: 'center',
  },
  subItemLeft: {
    flex: 1,
    borderLeftWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)',
    margin: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subHeader: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.5)',
  },
  subText: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  wind: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
