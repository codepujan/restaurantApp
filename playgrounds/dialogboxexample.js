
import React, {
  Component,
} from 'react';
import {
  Text,
  View
} from 'react-native';
import Prompt from 'react-native-prompt';

export default class DialogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      promptVisible: false
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 80, justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: 20 }} onPress={() => this.setState({ promptVisible: true })}>
            Open prompt
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20 }}>
            {this.state.message}
          </Text>
        </View>
        <Prompt
        textInputProps={{ keyboardType:'phone-pad' }}
            title="Food Preparing Time"
            placeholder="Estimated time ( in Mins)"
            defaultValue=""
            visible={this.state.promptVisible}
            onCancel={() => this.setState({ promptVisible: false, message: "You cancelled" })}
            onSubmit={(value) => this.setState({ promptVisible: false, message: `You said "${value}"` })}/>
      </View>
    );
  }
}




