import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const card = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: -20,
  },
  image: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  imageView: {
    width: 135,
    height: 110,
    overflow: 'hidden',
  },

  cardInfo: {
    paddingTop: 20,
    marginRight: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    height: 27,
    lineHeight: 16,
    width: '100%',
    fontWeight: '600',
    color: 'rgb(82, 82, 82)',
  },
  typeView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  type: {
    fontSize: 12,
    lineHeight: 12,
    flex: 1,
    fontWeight: '600',
    color: 'rgb(153, 153, 153)',
  },
  review: {
    fontSize: 9,
    lineHeight: 9,
    fontWeight: '600',
  },
  open: {
    color: 'rgb(66, 183, 42)',
    fontSize: 10,
    lineHeight: 10,
  },
  statusView: {
    flexDirection: 'row',
    marginTop: 16,
  },
});

export default card;
