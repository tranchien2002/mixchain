import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';

class Message extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hello Duc',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ],
  };

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#FFF',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#65B343',
          },
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF', paddingBottom: 15 }}>
        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
          title="Honda Motor"
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={this.renderBubble}
        />
      </View>
    );
  }
}

export default Message;
