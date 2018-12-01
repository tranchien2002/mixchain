import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
// import StarRating from 'react-native-star-rating';
// import Loading from '../../../components/LoadingContainer';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Colors from '../../themes/color';
import Images from '../../themes/Images';
// import Header from '../../../components/Header';
import ButtonCustom from '../../components/ButtonCustom';
import ButtonBookmark from '../../components/ButtonBookmark';
import * as d from '../../utilities/Tranform';
import styles from './styles';

const dataImageFake = [
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
  Images.gara,
];

class HomeOverviewRestaurant extends PureComponent {
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
        />
        <View style={styles.ScrollViewImages}>
          <FlatList
            horizontal
            data={dataImageFake}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.ImagesOverView} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.ViewContent}>
          <View style={styles.ViewNameRestaurant}>
            <Text style={styles.TextNameRestaurant}>Honda Motor</Text>
          </View>

          <View style={styles.ViewTypeRestaurantCost}>
            <View style={styles.ViewCost} />
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextStatus}>Open Now</Text>
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextLocation}>Hanoi</Text>
          </View>

          <View style={styles.ViewBtnBottom}>
            <ButtonCustom
              title="8h00 - 22h00"
              iconName={Icons.clockTime}
              iconColor={Colors.default}
            />
            <ButtonCustom
              title="Direct"
              iconName={Icons.directOutLine}
              iconColor={Colors.text}
              onPressButton={() => this.props.navigation.navigate('Direct')}
            />
            <ButtonCustom
              title="Message"
              iconName={Icons.message}
              iconColor={Colors.text}
              onPressButton={() => this.props.navigation.navigate('Message')}
            />
            <ButtonCustom
              title="Call Now"
              iconName={Icons.phoneCall}
              iconColor={Colors.text}
              onPressButton={() => {
                Alert.alert(
                  'Calling',
                  '+84 113 566 52',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Ask me later pressed'),
                    },

                    { text: 'Call', onPress: () => console.log('OK Pressed') },
                  ],
                  { cancelable: false },
                );
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeOverviewRestaurant;
