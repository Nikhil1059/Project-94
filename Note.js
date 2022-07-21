import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
export default class Note extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.val.date}</Text>
        <Text> {this.props.val.note} </Text>
        <TouchableOpacity>
          
          <Text> Del </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
