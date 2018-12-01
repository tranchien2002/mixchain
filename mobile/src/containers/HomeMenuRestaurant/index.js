import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import * as d from '../../utilities/Tranform';
import Content from '../../components/ContentMenu';

const dataFake = [
  {
    imagemenu: Images.wash,
    namemenu: 'Washing',
    pricemenu: '5',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.check,
    namemenu: 'Checking',
    pricemenu: '100',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.gear,
    namemenu: 'Gear fixing',
    pricemenu: '200',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
];

class HomeMenuRestaurant extends PureComponent {
  state = {};

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
          title="Menu"
          // rightNavBar={<Image source={Icons.search} />}
        />
        <View style={styles.ViewContent}>
          <FlatList
            data={dataFake}
            renderItem={({ item }) => <Content data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeMenuRestaurant;
