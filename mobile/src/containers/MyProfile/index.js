import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Platform,
  AsyncStorage,
  FlatList,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import styles from './styles';
import styles1 from '../../components/SmallCard/styles';
import Card from '../../components/ImageCard';

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

class Profile extends Component {
  onLogout = () => {
    Alert.alert('Thông báo', 'Bạn có muốn đăng xuất', [
      {
        text: 'Huỷ',
        onPress: () => {},
      },
      {
        text: 'Đồng ý',
        onPress: async () => {
          await AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Auth');
        },
      },
    ]);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <NavBar title="ACCOUNT" />
        <View style={styles1.container}>
          <View style={styles1.imageView}>
            <Image
              source={Images.defaultAvatar}
              style={{
                width: 110,
                height: 110,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View style={styles1.cardInfo}>
            <Text style={styles1.name}>Nguyen Trung Duc</Text>
            <View style={styles1.typeView}>
              <Text style={styles1.type}>Male</Text>
            </View>
            <View style={styles1.statusView}>
              <Text style={styles1.open}>Joined from 19/8/1945</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.botView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
          >
            <Text style={{ paddingLeft: 20, fontSize: 18, fontWeight: '600' }}>
              My cars:
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                borderRadius: 35,
                backgroundColor: 'rgb(66,183,42)',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}
              onPress={() => this.setState({ modalVisible: true })}
            >
              <Image source={Icons.add} />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={mockData}
            keyExtractor={(item, index) => String(item.id)}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                image={Images.car}
                modal={item.numberPlate}
                onPress={() => this.props.navigation.navigate('CarDetail')}
              />
            )}
          />
        </ScrollView>
        <TouchableOpacity
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(66,183,42,1)',
            borderRadius: 2.5,
            marginTop: 20,
            marginBottom: 20,
          }}
          onPress={this.onLogout}
        >
          <Text
            style={{
              fontSize: 14,
              lineHeight: 14,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <KeyboardSpacer />
      </View>
    );
  }
}

export default Profile;
