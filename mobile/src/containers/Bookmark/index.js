import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import NavBar from '../../components/NavBar';
import SmallCard from '../../components/SmallCard';
import Images from '../../themes/Images';
import Icons from '../../themes/Icons';

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

class Bookmark extends Component {
  state = {};

  onPressCard = () => {
    this.props.navigation.navigate('HomeDetail');
  };

  keyExtractor = (item) => String(item.id);

  renderItem = ({ item, index }) => (
    <SmallCard
      image={item.image}
      score={item.score}
      name={item.name}
      type={item.type}
      status={item.status}
      distance={item.distance}
      onPress={this.onPressCard}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <NavBar
          title="Bookmark"
          rightNavBar={<Image source={Icons.profile} />}
          onPressRight={() => this.props.navigation.navigate('MyProfile')}
        />
        <View style={{ flex: 1, paddingTop: 25 }}>
          <FlatList
            data={restaurantData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            onRefresh={() => {}}
            refreshing={false}
          />
        </View>
      </View>
    );
  }
}

export default Bookmark;
