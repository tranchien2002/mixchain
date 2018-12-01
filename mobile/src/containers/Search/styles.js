import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const search = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 136,
  },
  resultView: {},
  title: {
    fontSize: 14,
    color: 'black',
    marginLeft: 30,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 25,
  },
  opacity: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 95,
    width: 315,
    marginLeft: 30,
  },
});

const header = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 50,
    height: 100,
  },
  input: {
    fontWeight: '600',
    backgroundColor: 'transparent',
    lineHeight: 15,
    paddingTop: 0,
    color: 'grey',
    flex: 1,
  },
  searchView: {
    height: 30,
    borderBottomColor: 'rgb(153, 153, 153)',
    borderBottomWidth: 1,
    marginBottom: 19.5,
  },
  place: {
    flexDirection: 'row',
    height: 30,
  },
  borderBottom: {
    flex: 1,
    borderBottomColor: 'rgb(153, 153, 153)',
    borderBottomWidth: 1,
  },
  in: {
    bottom: 7,
    position: 'absolute',
    lineHeight: 30,
    fontSize: 14,
    color: 'rgb(153,153,153)',
  },
});

export { search, header };
