import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import Images from '../../themes/Images';

class SignUp extends Component {
  state = {
    isLoading: false,
    username: '',
    email: '',
    password: '',
    repassword: '',
  };

  onChangeUsername = (text) => {
    this.setState({
      username: text,
    });
  };

  onNextUsername = (text) => {
    this.emailField.focus();
  };

  onChangeEmail = (text) => {
    this.setState({
      email: text,
    });
  };

  onNextEmail = () => {
    this.passwordField.focus();
  };

  onChangePassword = (text) => {
    this.setState({
      password: text,
    });
  };

  onNextPassword = () => {
    this.rePasswordField.focus();
  };

  onChangeRePassword = (text) => {
    this.setState({
      repassword: text,
    });
  };

  onSignup = () => {
    if (
      this.state.username.length === 0 ||
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.repassword.length === 0
    ) {
      alert('Please fill all the form');
    } else if (
      this.state.password.length !== 0 &&
      this.state.repassword.length !== 0 &&
      this.state.password !== this.state.repassword
    ) {
      alert('Re-password is not correct');
    } else {
      this.setState({
        isLoading: true,
      });
      axios
        .post('http://10.20.0.154:3333/api/v1/auth/register', {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          if (res.status === 200) {
            this.props.navigation.goBack();
          } else {
            alert('Cannot create account');
          }
        })
        .catch((err) => {
          alert('Cannot create account');
          this.setState({ isLoading: false });
        });
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            flex: 1,
            height: 200,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: '600' }}>SIGN UP</Text>
        </View>
        <View style={styles.signup}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeUsername}
              onSubmitEditing={this.onNextUsername}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              underlineColorAndroid="transparent"
              keyboardType="email-address"
              onChangeText={this.onChangeEmail}
              onSubmitEditing={this.onNextEmail}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              ref={(ref) => {
                this.emailField = ref;
              }}
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
              onSubmitEditing={this.onNextPassword}
              autoCapitalize="none"
            />
            <TextInput
              ref={(ref) => {
                this.rePasswordField = ref;
              }}
              style={styles.input}
              placeholder="Re-Password"
              underlineColorAndroid="transparent"
              secureTextEntry
              onChangeText={this.onChangeRePassword}
              onSubmitEditing={this.onSignup}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.vButton}>
            <TouchableOpacity style={styles.btnLogin} onPress={this.onSignup}>
              {!this.state.isLoading ? (
                <Text style={styles.txtBtn}>SIGN UP</Text>
              ) : (
                <ActivityIndicator size="small" color="white" />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.txtBottom}>You have account? Go to</Text>
            <TouchableOpacity
              style={styles.textSignUpContainer}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.txtSignup}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignUp;
