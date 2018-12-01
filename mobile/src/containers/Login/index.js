import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import Images from '../../themes/Images';
import axios from 'axios';

class Login extends Component {
  state = {
    isLoading: true,
    email: '',
    password: '',
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log(token);
      this.props.navigation.navigate('Home');
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onNext = () => {
    this.passwordField.focus();
  };

  onChangePassword = (text) => {
    this.setState({
      password: text,
    });
  };

  onLogin = () => {
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      alert('Please fill the form');
    } else {
      this.setState({
        isLoading: true,
      });
      axios
        .post('http://10.20.0.154:3333/api/v1/auth/sign-in', {
          email: this.state.email,
          password: this.state.password,
        })
        .then(async (res) => {
          if (res.data.token) {
            await AsyncStorage.setItem('token', res.data.token);
            this.props.navigation.navigate('Home');
          }
        })
        .catch((err) => {
          alert('Login failed');
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
        }}
      >
        <ScrollView style={styles.container}>
          <View
            style={{
              flex: 1,
              height: 200,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: '600' }}>LOGIN</Text>
          </View>
          <View style={styles.loginForm}>
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCapitalize="none"
                onChangeText={this.onChangeEmail}
                onSubmitEditing={this.onNext}
                autoCorrect={false}
              />
              <TextInput
                ref={(ref) => {
                  this.passwordField = ref;
                }}
                style={styles.input}
                placeholder="Password"
                underlineColorAndroid="transparent"
                secureTextEntry
                onChangeText={this.onChangePassword}
                onSubmitEditing={this.onLogin}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.vButton}>
              <TouchableOpacity style={styles.btnLogin} onPress={this.onLogin}>
                {!this.state.isLoading ? (
                  <Text style={styles.txtBtn}> LOG IN </Text>
                ) : (
                  <ActivityIndicator size="small" color="white" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.txtBottom}>Not account? Go to</Text>
              <TouchableOpacity
                style={styles.textSignUpContainer}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                <Text style={styles.txtSignup}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;
