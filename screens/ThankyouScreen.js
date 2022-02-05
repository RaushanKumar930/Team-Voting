import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default class ThankyouScreen extends Component {
  render() {
    return(
      <View>
        <View>
          <Image
            style={{ width: 300, height: 220, marginLeft: 15 }}
            source={require('../assets/thankyou.png')}
          />
        </View>
        <Text style={styles.text}>Thankyou For Voting</Text>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
      fontWeight: 'bold',
      marginTop: 200,
      color: 'black',
      fontSize: 15,
      textAlign: 'center'
    }
  })