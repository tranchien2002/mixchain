import React from 'react';
import { View, TouchableOpacity, StatusBar, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const NavBar = ({
  leftNavBar,
  title,
  rightNavBar,
  onPressLeft,
  onPressRight,
}) => (
  <View style={styles.container}>
    <StatusBar backgroundColor="transparent" />
    <View style={styles.navBarComponent}>
      <TouchableOpacity onPress={onPressLeft} style={styles.leftNavBarStyle}>
        {leftNavBar}
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onPressRight}>{rightNavBar}</TouchableOpacity>
    </View>
  </View>
);

export default NavBar;
