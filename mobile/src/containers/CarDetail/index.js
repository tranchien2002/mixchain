import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import CollapsibleList from 'react-native-collapsible-list';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import NavBar from '../../components/NavBar';
import SmallCard from '../../components/SmallCard';
import styles1 from '../HomeOverviewRestaurant/styles';
import QRCode from 'react-native-qrcode';

class CarDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseButtonText: 'More',
      modalVisible: false,
      value: {
        userId: 12345678,
        carId: 87654321,
      },
    };
  }

  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <View style={{ flex: 1 }}>
          <NavBar
            leftNavBar={
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
              >
                <Image source={Icons.back} />
              </TouchableOpacity>
            }
            title=""
            // rightNavBar={<Image source={Icons.search} />}
          />
          <Text
            style={{
              paddingLeft: 20,
              paddingTop: 20,
              fontSize: 18,
              fontWeight: '800',
            }}
          >
            MY EXCHANGEABLE QR-CODE
          </Text>
          <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
            <QRCode
              value="abc123"
              size={200}
              bgColor="#65B343"
              fgColor="white"
            />
          </View>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        {this.renderModal()}
        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
          title="MY CAR"
        />
        <SmallCard
          image={Images.car}
          name="Mercedesbenz C200"
          type="2018"
          plate="30F-12345"
        />
        <Text
          style={{
            paddingLeft: 20,
            fontSize: 16,
            fontWeight: '600',
          }}
        >
          History:
        </Text>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1, padding: 10 }}>
            <CollapsibleList
              numberOfVisibleItems={1}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              animationConfig={{ duration: 300 }}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {this.state.collapseButtonText}
                  </Text>
                </View>
              }
            >
              <View style={styles.collapsibleItem}>
                <Text>Day 12/06/2018</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
            </CollapsibleList>
            <CollapsibleList
              numberOfVisibleItems={1}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              animationConfig={{ duration: 300 }}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {this.state.collapseButtonText}
                  </Text>
                </View>
              }
            >
              <View style={styles.collapsibleItem}>
                <Text>Day 12/09/2018</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
            </CollapsibleList>
            <CollapsibleList
              numberOfVisibleItems={1}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              animationConfig={{ duration: 300 }}
              wrapperStyle={styles.wrapperCollapsibleList}
              buttonContent={
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    {this.state.collapseButtonText}
                  </Text>
                </View>
              }
            >
              <View style={styles.collapsibleItem}>
                <Text>Day 12/12/2018</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
              <View style={styles.collapsibleItem}>
                <Text>Some action</Text>
              </View>
            </CollapsibleList>
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
            onPress={() => this.setState({ modalVisible: true })}
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
              SELL THIS CAR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CarDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  button: {
    padding: 10,
    backgroundColor: '#65B343',
  },
  collapsibleItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CCC',
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
    width: '100%',
    alignSelf: 'center',
  },
});
