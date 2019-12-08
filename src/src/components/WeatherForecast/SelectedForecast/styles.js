import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255  ,0.65)',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    padding: 10,
  },
  header: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerDescription: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 5,
  },

  headerTime: {
    fontSize: 25,
    paddingRight: 10,
    fontStyle: 'italic',
    fontWeight: '100',
  },
  headerDate: {
    fontSize: 17,
  },
  headerWeather: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    height: '100%',
    aspectRatio: 1,
  },
  description: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainTemp: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
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
    borderRightWidth: 3,
    borderColor: 'rgba(0,0,0,0.5)',
    margin: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
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
    alignItems: 'flex-end',
  },
});
