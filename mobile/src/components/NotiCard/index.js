import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const NotiCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.ViewMain}>
        <View style={styles.ViewAvatar}>
          <Image source={props.avatar} style={styles.Avatar} />
        </View>
        <View style={styles.ViewContent}>
          <View style={styles.ViewFollow}>
            <View style={styles.ViewFollowNameTime}>
              <Text>
                <Text style={styles.TextFollowYou}>{props.description} </Text>
                <Text style={styles.TextHightlight}>{props.highlight}</Text>
              </Text>
              <Text style={styles.TextTime}>{props.time} </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotiCard;
