/**
 * A simple component to use
 * Do the "providesModule" provides module name to haste map
 * So you can reference it from other file by
 * import BackButton from "BackButton.react"
 * @providesModule BackButton.react
 */
'use strict';

import React from 'react';
import Entity from 'Entity';
import {
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  VrButton,
  Animated,
  NativeModules,
  Surface
} from 'react-360';


class BackButton extends React.Component {
  static defaultProps = {
    width: 2000,
    text: 'Return',
   
  };

  constructor(props) {
    super(props);
  }

  _click = () => {
    // input handling
    window.location.reload();
  };


  render() {
    return (
      <View>
        <VrButton
          onClick={this._click} >
              <Text style={styles.text}>
                {this.props.text}
              </Text>
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    // panel: {
    // width: 100,
    // height: 60,
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    // justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
    // },
    // button: {
    // backgroundColor: 'grey',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: 'black',
    // borderWidth: 2,
    // borderRadius: 5,
    // // flexDirection: 'row',
    // height: 60,
//   },
  text: {
    fontSize: 20,
    color: 'purple',
    textAlign: 'center',
    flex: 1,
    transform: [
        {rotateY: 0},
        {rotateX: 95},
        {rotateZ: 0},
    ]
  },
});



// AppRegistry.registerComponent('BackButton', () => BackButton);
module.exports = BackButton;