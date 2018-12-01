import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import card from './styles';

const ImageCard = (props) => (
  <View style={card.container}>
    <TouchableOpacity onPress={props.onPress}>
      <View style={card.imageView}>
        <Image style={card.image} source={props.image} />
      </View>
      <View style={card.infoView}>
        <Text style={card.name} numberOfLines={1}>
          {props.name}
        </Text>
        <View style={card.statusView}>
          <Text style={card.status}>{props.modal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default ImageCard;
