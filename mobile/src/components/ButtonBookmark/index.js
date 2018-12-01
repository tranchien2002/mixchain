import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import styles from './styles';
import Icons from '../../themes/Icons';
import Colors from '../../themes/color';

class ButtonBookmark extends PureComponent {
  state = {
    isBookmark: false,
  };

  renderButtonIcon = conditon => {
    if (conditon) {
      return (
        <View style={styles.ViewMain}>
          <Image source={Icons.pinFocused} style={styles.iconStyle} />
          <Text
            style={{
              fontSize: 9,
              fontWeight: 'bold',
              color: Colors.default,
            }}
          >
            Bookmark
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.ViewMain}>
        <Image source={Icons.pin} style={styles.iconStyle} />
        <Text
          style={{
            fontSize: 9,
            fontWeight: 'bold',
            color: Colors.text,
          }}
        >
          Bookmark
        </Text>
      </View>
    );
  };

  pressBookmark = () => {
    this.setState({
      isBookmark: !this.state.isBookmark,
    });
  };

  render() {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.pressBookmark()}>
        {this.renderButtonIcon(this.state.isBookmark)}
      </TouchableOpacity>
    );
  }
}

export default ButtonBookmark;
