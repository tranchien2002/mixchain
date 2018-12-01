import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const statistic = StyleSheet.create({
  container: {
    width: 95 * d.ratioW,
    height: 60 * d.ratioH,
    // marginRight: 15 * d.ratioW,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 2.5,
  },
  number: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 6 * d.ratioH,
    color: 'black',
  },
  title: {
    fontSize: 9,
    color: 'rgb(153, 153, 153)',
  },
});

export default statistic;
