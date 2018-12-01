import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import HomeMenuRestaurant from '../HomeMenuRestaurant';
import HomeOverviewRestaurant from '../HomeOverviewRestaurant';
import HomeReviewRestaurant from '../HomeReviewRestaurant';

const OVERVIEW = 'HomeOverviewRestaurant';
const MENU = 'HomeMenuRestaurant';
const REVIEW = 'HomeReviewRestaurant';

class HomeDetail extends Component {
  state = {
    activeTab: OVERVIEW,
    isOverviewClick: true,
    isMenuClick: false,
    isReviewClick: false,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.goBack(null);
    return true;
  };

  clickTab1 = () => {
    this.setState({
      activeTab: OVERVIEW,
      isOverviewClick: true,
      isMenuClick: false,
      isReviewClick: false,
    });
  };
  clickTab2 = () => {
    this.setState({
      activeTab: MENU,
      isOverviewClick: false,
      isMenuClick: true,
      isReviewClick: false,
    });
  };
  clickTab3 = () => {
    this.setState({
      activeTab: REVIEW,
      isOverviewClick: false,
      isMenuClick: false,
      isReviewClick: true,
    });
  };

  renderContent = (activeTab) => {
    if (activeTab === OVERVIEW) {
      return <HomeOverviewRestaurant navigation={this.props.navigation} />;
    }
    if (activeTab === MENU) {
      return <HomeMenuRestaurant navigation={this.props.navigation} />;
    }
    return <HomeReviewRestaurant navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <View style={styles.ViewContent}>
          {this.renderContent(this.state.activeTab)}
        </View>
        <View style={styles.ViewTabbar}>
          <TouchableOpacity
            onPress={() => this.clickTab1()}
            style={
              this.state.isOverviewClick
                ? styles.TabbarFocus
                : styles.TabbarNotFocus
            }
          >
            <Text
              style={
                this.state.isOverviewClick
                  ? styles.TextFocus
                  : styles.TextNotFocus
              }
            >
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.clickTab2()}
            style={
              this.state.isMenuClick
                ? styles.TabbarFocus
                : styles.TabbarNotFocus
            }
          >
            <Text
              style={
                this.state.isMenuClick ? styles.TextFocus : styles.TextNotFocus
              }
            >
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.clickTab3()}
            style={
              this.state.isReviewClick
                ? styles.TabbarFocus
                : styles.TabbarNotFocus
            }
          >
            <Text
              style={
                this.state.isReviewClick
                  ? styles.TextFocus
                  : styles.TextNotFocus
              }
            >
              Review
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeDetail;
