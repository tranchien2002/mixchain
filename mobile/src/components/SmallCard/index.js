import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <View style={styles.imageView}>
        <Image
          source={props.image}
          style={
            typeof props.plate === 'string'
              ? styles.image
              : { width: 110, height: 110, resizeMode: 'cover' }
          }
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.typeView}>
          <Text style={styles.type}>
            {typeof props.plate !== 'string' ? '' : 'Modal '}
            {props.type}
          </Text>
        </View>
        <View style={styles.statusView}>
          <Text style={styles.open}>
            {typeof props.plate === 'string'
              ? props.plate
              : `${props.plate}km from you`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
