import * as React from 'react';
import { View,TouchableOpacity,TextInput, Text } from 'react-native';
import {Header} from 'react-native-elements';
class App extends React.Component {
  render() {
    return (
      <View>
        
        <Header centerComponent={{text:"ToDo App",  style:{fontSize:20}}} 
        backgroundColor="lightblue" />

        <TextInput placeholder="Enter Your Task" />
        <TouchableOpacity>  <Text> Add </Text>  </TouchableOpacity>
      </View>
    );
  }
}
export default App;
