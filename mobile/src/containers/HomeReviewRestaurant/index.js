import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import Content from '../../components/ContentReview';
import NavBar from '../../components/NavBar';
import { Rating, AirbnbRating } from 'react-native-ratings';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const dataFake = [
  {
    avatar: Images.avatar1,
    name: 'Corona Australis',
    hours: 23,
    score: 4.2,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar2,
    name: 'Sagittarius',
    hours: 12,
    score: 4.2,
    comment:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    isImages: 0,
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 5.0,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 3.6,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
];

class HomeReviewRestaurant extends PureComponent {
  state = {
    dataFake: dataFake,
    modalVisible: false,
    comment: '',
    rating: 3,
  };

  send = (comment, score) => {
    if (comment == '') {
      this.setState({
        modalVisible: false,
        comment: '',
      });
    } else {
      const dataAdd = {
        avatar: Images.avatar3,
        name: 'Trieu Hoang An',
        hours: 1,
        score: score,
        comment: comment,
        isImages: 0,
      };
      let newarr = this.state.dataFake;
      newarr.unshift(dataAdd);

      this.setState({
        dataFake: newarr,
        modalVisible: false,
        comment: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
          title="Review"
        />

        <View style={styles.ViewContent}>
          <FlatList
            data={this.state.dataFake}
            renderItem={({ item }) => <Content data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeReviewRestaurant;
