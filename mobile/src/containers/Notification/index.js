import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import NotiCard from '../../components/NotiCard';

class Notification extends Component {
  state = {
    data: [
      {
        id: '2',
        avatar: Images.warning,
        description: 'We found some problems with your car on',
        highlight: '20/08/2017',
        time: '02 week',
      },
      {
        id: '3',
        avatar: Images.service,
        description: 'You should check your car in ',
        highlight: '2 weeks',
        time: '02 week',
      },
      {
        id: '4',
        avatar: Images.discount,
        description: 'All services of Honda Motor were discounted to',
        highlight: '30%',
        time: '02 week',
      },
    ],
  };

  renderItem = ({ item }) => {
    return (
      <NotiCard
        avatar={item.avatar}
        description={item.description}
        highlight={item.highlight}
        time={item.time}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <NavBar title="NOTIFICATION" />
        <View style={{ flex: 1, paddingTop: 25 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => item.id}
            renderItem={this.renderItem}
            refreshing={false}
            onRefresh={() => {}}
          />
        </View>
      </View>
    );
  }
}

export default Notification;
