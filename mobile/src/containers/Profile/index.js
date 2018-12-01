import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Statistic from '../../components/Statistic';
import Card from '../../components/ImageCard';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import styles from './styles';

const restaurantData = [
  {
    id: 1,
    image: Images.restaurantPhoto,
    score: '8.0',
    name: 'KFC',
    type: 'Restaurant',
    status: 1,
    distance: 0.8,
  },
  {
    id: 2,
    image: Images.restaurantPhoto,
    score: '7.5',
    name: 'Lotteria',
    type: 'Restaurant',
    status: 0,
    distance: 3,
  },
  {
    id: 3,
    image: Images.restaurantPhoto,
    score: '9.0',
    name: 'Daruma',
    type: 'Restaurant',
    status: 1,
    distance: 8,
  },
  {
    id: 4,
    image: Images.restaurantPhoto,
    score: '8.0',
    name: 'The Coffee House',
    type: 'Cafeteria',
    status: 1,
    distance: 0.5,
  },
  {
    id: 5,
    image: Images.restaurantPhoto,
    score: '5.0',
    name: '1900',
    type: 'Bar',
    status: 1,
    distance: 12,
  },
];

class Profile extends Component {
  state = {
    isFollowed: false,
  };

  onFollow = () => {
    this.setState({
      isFollowed: !this.state.isFollowed,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.topView}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <NavBar
              title="Account"
              leftNavBar={<Image source={Icons.back} />}
              rightNavBar={<Image source={Icons.profile} />}
              onPressLeft={() => this.props.navigation.goBack()}
              onPressRight={() => this.props.navigation.navigate('MyProfile')}
            />
            <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
              <Image source={Images.noti1} style={styles.avatar} />
              <Text style={styles.name}>tuananhng</Text>
              <Text style={styles.detail}>Male, Hanoi</Text>
            </View>
          </View>
          <View style={{ height: 20, width: 10 }} />

          {!this.state.isFollowed ? (
            <TouchableOpacity style={styles.btnFollow} onPress={this.onFollow}>
              <Image source={Icons.follow} style={styles.imageFollow} />
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 14,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Follow
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnFollow} onPress={this.onFollow}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 14,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Followed
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.botView}>
          <View style={styles.statisticView}>
            <Statistic number={1000} title="Follower" />
            <Statistic number={100} title="Followings" />
            <Statistic number={10} title="Share" />
          </View>
          <Text style={styles.botRestaurant}>My Restaurant</Text>
          <FlatList
            horizontal
            data={restaurantData}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                image={item.image}
                status={item.status}
                restaurantVicinity={item.distance}
                review={item.score}
                onPress={() => this.props.navigation.navigate('HomeDetail')}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
