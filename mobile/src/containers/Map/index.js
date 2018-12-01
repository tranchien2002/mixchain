import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import mapStyles from './mapStyles';
import { isIphoneX } from '../../utilities/device';
import styles from './styles';
import CardView from './CardView';

const example = [
  {
    id: 1,
    latitude: 21.028327,
    longitude: 105.800054,
  },
  {
    id: 2,
    latitude: 21.022327,
    longitude: 105.800084,
  },
];

class Map extends Component {
  constructor(props) {
    super(props);
    this._marker = [];
    this.markers = [];
  }

  state = {
    region: {
      latitude: 21.025817,
      longitude: 105.800344,
      latitudeDelta: 0.0101,
      longitudeDelta: 0.0104,
    },
    error: null, // eslint-disable-line
    focusing: null,
    destination: null,
    dataRestaurantAround: null,
  };

  getItemLayout = (data, index) => ({
    length: 220,
    offset: isIphoneX ? 219 * index : 210 * index,
    index,
  });

  scrollToIndex = (index) => {
    this._flatListMarker.scrollToIndex({
      animated: true,
      index,
      viewOffset: 1,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <NavBar title="Map" />
        <View style={{ flex: 1 }}>
          <MapView
            region={this.state.region}
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            ref={(ref) => {
              this.map = ref;
            }}
            customMapStyle={mapStyles}
          >
            <Marker coordinate={this.state.region}>
              <Image
                source={Icons.mapPin}
                style={
                  isIphoneX() === true
                    ? styles.mapPinIphoneXStyle
                    : styles.mapPinStyle
                }
              />
            </Marker>
            {example !== null
              ? example.map((markers, index) => (
                  <Marker
                    key={markers.id}
                    // eslint-disable-next-line
                    ref={(marker) =>
                      (this._marker[index] = { marker, id: markers.id })
                    }
                    coordinate={{
                      latitude: markers.latitude,
                      longitude: markers.longitude,
                    }}
                    onPress={() => {
                      this.setState({
                        focusing: this._marker[index].id,
                        destination: this._marker[index].marker.props
                          .coordinate,
                      });
                    }}
                  >
                    <View style={styles.markerContainer}>
                      <Image
                        source={
                          this.state.focusing === markers.id
                            ? Icons.greenMarker
                            : Icons.grayMarker
                        }
                      />
                      <Image
                        source={Images.defaultImage}
                        style={
                          this.state.focusing === markers.id
                            ? styles.focusingPhotoMarkerStyle
                            : styles.defaultPhotoMarkerStyle
                        }
                      />
                    </View>
                  </Marker>
                ))
              : null}
            <TouchableOpacity
              style={{
                width: '80%',
                // alignSelf: 'center',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(66,183,42,1)',
                borderRadius: 2.5,
                marginTop: 20,
                marginBottom: 20,
                position: 'absolute',
                bottom: 10,
                left: 40,
              }}
              onPress={() => this.props.navigation.navigate('HomeDetail')}
              disabled={this.state.focusing !== null ? false : true}
            >
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 14,
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: '400',
                }}
              >
                VIEW DETAIL
              </Text>
            </TouchableOpacity>
          </MapView>
        </View>
      </View>
    );
  }
}

export default Map;
