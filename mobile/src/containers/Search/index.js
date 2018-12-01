import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, FlatList } from 'react-native';
import { search, header } from './styles';
import SmallCard from '../../components/SmallCard';
import Images from '../../themes/Images';
import Icons from '../../themes/Icons';

const restaurantData = [
  {
    id: 1,
    image: Images.gara,
    name: 'Honda',
    type: 'Garage',
    plate: 0.8,
  },
  {
    id: 2,
    image: Images.gara,
    name: 'Mazda',
    type: 'Garage',
    plate: 3,
  },
  {
    id: 3,
    image: Images.gara,
    name: 'Toyata',
    type: 'Garage',
    plate: 8,
  },
  {
    id: 4,
    image: Images.gara,
    name: 'Mercedesbenz',
    type: 'Garage',
    plate: 0.5,
  },
  {
    id: 5,
    image: Images.gara,
    name: 'Vinfast',
    type: 'Garage',
    plate: 12,
  },
];

class Search extends Component {
  state = {
    isShow: false,
    search: '',
  };

  onChangeSearch = (text) => {
    this.setState({
      search: text,
    });
  };

  onBlurSearch = () => {
    if (this.state.search.length > 0) {
      this.setState({
        isShow: true,
      });
    }
  };

  searchSubmit = () => {
    if (this.state.search.length > 0) {
      this.setState({
        isShow: true,
      });
    }
  };

  onPressCard = () => {
    this.props.navigation.navigate('HomeDetail');
  };

  keyExtractor = (item) => String(item.id);

  renderItem = ({ item, index }) => (
    <SmallCard
      style={{ width: '90%', marginBottom: 15 }}
      image={item.image}
      name={item.name}
      type={item.type}
      plate={item.plate}
      onPress={this.onPressCard}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={header.container}>
          <View style={header.searchView}>
            <TextInput
              ref={(ref) => {
                this.search = ref;
              }}
              placeholder="Search Garages and ..."
              style={[header.input, { textAlign: 'center' }]}
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeSearch}
              onSubmitEditing={this.searchSubmit}
              onBlur={this.onBlurSearch}
              autoCorrect={false}
            />
          </View>
        </View>
        <Text style={search.title}> Recommended for you </Text>
        <View style={{ flex: 1 }}>
          {this.state.isShow ? (
            <FlatList
              data={restaurantData}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              onRefresh={() => {}}
              refreshing={false}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default Search;
