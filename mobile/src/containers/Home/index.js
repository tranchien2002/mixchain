import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import styles from './styles';
import Images from '../../themes/Images';

// make
// modelType
// color
// numberPlate

const mockData = [
  {
    id: 1,
    name: 'Mercedesbenz C200',
    model: 2018,
    color: 'Black',
    numberPlate: '30F-12345',
  },
  {
    id: 2,
    name: 'Mazda 3',
    model: 2019,
    color: 'Red',
    numberPlate: '30F-13345',
  },
  {
    id: 3,
    name: 'Honda CRV',
    model: 2017,
    color: 'White',
    numberPlate: '30F-21392',
  },
];

class Home extends Component {
  keyExtractor = (item) => item.id;

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.CardMain}
        onPress={() => this.props.navigation.navigate('CarDetail')}
      >
        <Image
          source={Images.car}
          style={styles.CardImage}
          resizeMode="cover"
        />
        <View style={styles.CardViewBottom}>
          <Text style={styles.CardResName}>
            {item.name} - {item.color}
          </Text>
          <Text style={styles.CardResType}>Modal {item.model}</Text>
          <View style={styles.CardOpenView}>
            <Text style={[styles.CardResDis, { color: 'rgb(66,183,42)' }]}>
              {item.numberPlate}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar title="HOME" />
        <ScrollView style={{ paddingTop: 20 }}>
          <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '600' }}>
            My cars:
          </Text>
          <FlatList
            style={{ marginTop: 20 }}
            keyExtractor={this.keyExtractor}
            data={mockData}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
