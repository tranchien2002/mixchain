import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

class Content extends PureComponent {
  state = {};

  // componentDidMount() {
  //   console.log(this.props.data);
  // }

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewImg}>
          <Image source={this.props.data.imagemenu} style={styles.Img} />
        </View>
        <View style={styles.ViewContent}>
          <View style={styles.ViewTitleCost}>
            <View style={styles.ViewTitle}>
              <Text numberOfLines={1} style={styles.TextTitle}>
                {this.props.data.namemenu}
              </Text>
            </View>
            <View style={styles.ViewCost}>
              <Text style={styles.TextCost}>${this.props.data.pricemenu}</Text>
            </View>
          </View>
          <View style={styles.ViewDescription}>
            <Text style={styles.TextDescription}>
              {this.props.data.detailmenu}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Content;
