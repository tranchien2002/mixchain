import React, { PureComponent } from 'react';
import { View, Text, Image, Animated } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import mapStyles from './mapStyles';
import styles from './styles';
import NavBar from '../../components/NavBar';
import Card from '../../components/Card';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import * as d from '../../utilities/Tranform';

const PADDING = {
  top: 50 * d.ratioH,
  right: 50 * d.ratioW,
  bottom: 50 * d.ratioH,
  left: 50 * d.ratioW,
};

class Direct extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 21.025817,
        longitude: 105.800344,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      destination: {
        latitude: 21.0190442,
        longitude: 105.8015052,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      err: null, // eslint-disable-line
      animatedLargeMarker: new Animated.Value(0),
      animatedMediumMarker: new Animated.Value(0),
      animatedSmallMarker: new Animated.Value(0),
      animatedLargeMarkerFade: new Animated.Value(1),
      animatedMediumMarkerFade: new Animated.Value(1),
      animatedSmallMarkerFade: new Animated.Value(1),
      direction: [],
      distance: null,
      travelTime: null,
    };
  }

  componentDidMount() {
    this.animationMarker();
    this.onGetDirection();
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    navigator.geolocation.clearWatch(this.watchID);
  }

  onGetDirection = (resJson) => {
    const points = Polyline.decode(
      'gri_CccwdSNkCLBb@?|DKn@GbGSFPVfAj@nBoEnFRLBCdBgBf@o@jBcCzAmAlE{BnAs@~@pBzB_AxAs@N\\QL',
    );
    const coords = points.map((point) => ({
      latitude: point[0],
      longitude: point[1],
    }));

    this.setState({
      direction: coords,
      travelTime: '6 mins',
      distance: '1.4 km',
    });
  };

  animationMarker = () => {
    Animated.parallel([
      Animated.timing(this.state.animatedSmallMarkerFade, {
        toValue: 1,
        duration: 0,
      }),
      Animated.timing(this.state.animatedMediumMarkerFade, {
        toValue: 1,
        duration: 0,
      }),
      Animated.timing(this.state.animatedLargeMarkerFade, {
        toValue: 1,
        duration: 0,
      }),
      Animated.timing(this.state.animatedSmallMarker, {
        toValue: 0,
        duration: 0,
      }),
      Animated.timing(this.state.animatedMediumMarker, {
        toValue: 0,
        duration: 0,
      }),
      Animated.timing(this.state.animatedLargeMarker, {
        toValue: 0,
        duration: 0,
      }),
      Animated.timing(this.state.animatedSmallMarker, {
        toValue: 1,
        duration: 600,
      }),
      Animated.timing(this.state.animatedMediumMarker, {
        toValue: 1,
        duration: 900,
      }),
      Animated.timing(this.state.animatedLargeMarker, {
        toValue: 1,
        duration: 1200,
      }),
      Animated.timing(this.state.animatedSmallMarkerFade, {
        toValue: 0,
        duration: 400,
        delay: 1200,
      }),
      Animated.timing(this.state.animatedMediumMarkerFade, {
        toValue: 0,
        duration: 400,
        delay: 1200,
      }),
      Animated.timing(this.state.animatedLargeMarkerFade, {
        toValue: 0,
        duration: 400,
        delay: 1200,
      }),
    ]).start(() => this.animationMarker());
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar
          leftNavBar={<Image source={Icons.back} />}
          title="Direct"
          onPressLeft={() => this.props.navigation.goBack()} // eslint-disable-line
        />
        <MapView
          region={this.state.region}
          ref={(ref) => (this.map = ref)} // eslint-disable-line
          provider="google"
          customMapStyle={mapStyles}
          style={{ flex: 1 }}
        >
          <Marker coordinate={this.state.region} anchor={{ x: 0.5, y: 0.5 }}>
            <View style={styles.smallMarkerLocation}>
              <View style={styles.smallCenterMarker} />
            </View>
          </Marker>
          <Marker coordinate={this.state.region} anchor={{ x: 0.5, y: 0.5 }}>
            <View style={styles.userMarker}>
              <Animated.View
                style={[
                  styles.circleMarkerStyle,
                  styles.largeMarker,
                  {
                    transform: [{ scale: this.state.animatedLargeMarker }],
                    opacity: this.state.animatedLargeMarkerFade,
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.circleMarkerStyle,
                  styles.mediumMarker,
                  {
                    transform: [{ scale: this.state.animatedMediumMarker }],
                    opacity: this.state.animatedMediumMarkerFade,
                  },
                ]}
              />
              <Animated.View
                style={[
                  styles.circleMarkerStyle,
                  styles.smallMarker,
                  {
                    transform: [{ scale: this.state.animatedSmallMarker }],
                    opacity: this.state.animatedSmallMarkerFade,
                  },
                ]}
              />
              <Image source={Images.avatar} style={styles.userImageMarker} />
            </View>
          </Marker>
          <Marker
            coordinate={this.state.destination}
            anchor={{ x: 0.5, y: 0.5 }}
          >
            <View style={styles.smallMarkerLocation}>
              <View style={styles.smallCenterMarker} />
            </View>
          </Marker>
          <MapView.Polyline
            coordinates={this.state.direction}
            strokeColor="rgb(66, 183, 42)"
            strokeWidth={3}
          />
        </MapView>
        <Card style={styles.cardStyle} direction="row">
          <View style={styles.firstViewStyle}>
            <Image source={Icons.direct} style={styles.directStyle} />
          </View>
          <View style={styles.secondViewStyle}>
            <View style={styles.detailStyle}>
              <Text style={styles.travelTimeStyle}>
                {this.state.travelTime}
              </Text>
              <Text style={styles.distanceStyle}>({this.state.distance})</Text>
            </View>
            <Text style={styles.textStyle}>Fastest route</Text>
          </View>
        </Card>
      </View>
    );
  }
}

export default Direct;
