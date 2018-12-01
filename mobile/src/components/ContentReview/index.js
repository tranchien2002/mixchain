import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './styles';
import Colors from '../../themes/color';

class Content extends PureComponent {
  state = {
    modalVisible: false,
    photoView: null,
  };

  gallery = condition => {
    if (condition > 0) {
      return (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.ViewGallery}
          data={this.props.data.Images}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image source={item} style={styles.gallery} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewMainChild}>
          <View style={styles.ViewMainChildTop}>
            <View style={styles.ViewAvatar}>
              <Image source={this.props.data.avatar} style={styles.avatar} />
            </View>
            <View style={styles.ViewNameHours}>
              <Text style={styles.TextName}>{this.props.data.name}</Text>
              <Text style={styles.TextHoursComment}>
                {this.props.data.hours} hour
              </Text>
            </View>
            <View style={styles.ViewScore}>
              <Text style={styles.TextScore}>{this.props.data.score}/5</Text>
            </View>
          </View>
          <View style={styles.ViewMainChildBottom}>
            <Text style={styles.TextHoursComment}>
              {this.props.data.comment}
            </Text>
          </View>
          {this.gallery(this.props.data.isImages)}
          {/* <View style={styles.ViewMainChildBottom}>
            <Text style={styles.TextHoursComment2}>
              {this.props.data.restaurantName}
            </Text>
          </View> */}
        </View>
      </View>
    );
  }
}

export default Content;
