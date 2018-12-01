import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const login = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FAFAFA',
  },
  loginForm: {
    flex: 1,
  },
  form: {
    paddingTop: 75,
    paddingLeft: 30 * d.ratioW,
    paddingRight: 30 * d.ratioW,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.01)',
    borderRadius: 10,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50 * d.ratioH,
    marginBottom: 17 * d.ratioH,
    backgroundColor: 'white',
    paddingLeft: 20,
    borderRadius: 3,
    elevation: 5,
  },
  vButton: {
    paddingLeft: 30 * d.ratioW,
    paddingRight: 30 * d.ratioW,
    width: '100%',
    marginTop: 20,
  },
  btnLogin: {
    height: 50 * d.ratioH,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    borderRadius: 5,
    backgroundColor: 'rgb(76, 196, 57)',
  },
  txtBtn: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  textContainer: {
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
  },
  textSignUpContainer: {
    top: 21 * d.ratioH,
    left: -2 * d.ratioW,
  },
  txtSignup: {
    fontWeight: 'bold',
    color: 'rgba(66,183,42,1)',
  },
  txtBottom: {
    marginTop: 15,
    textAlign: 'center',
    padding: 10,
  },
});

export default login;
