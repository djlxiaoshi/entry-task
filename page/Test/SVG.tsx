import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Circle, Rect, SvgCssUri, SvgXml   } from 'react-native-svg';
import testSvg from '../../assets/icon/check.svg';

export default class SvgExample extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
        {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
          <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
        </Svg>

        <SvgCssUri
            width="100%"
            height="100%"
            uri="http://thenewcode.com/assets/svg/accessibility.svg"
        /> */}

        <SvgXml width="200" height="200" xml={testSvg} />
      </View>
    );
  }
}
