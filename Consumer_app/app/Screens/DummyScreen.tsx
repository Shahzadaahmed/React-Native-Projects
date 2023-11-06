import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  navigation: any;
}

export default class DummyScreen extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center'}}>
                In Development
            </Text>
        </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
