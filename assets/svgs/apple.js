import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Rect, Path, G, SvgUri } from "react-native-svg";

const apple = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { alignItems: "center", justifyContent: "center" },
      ]}
    >
      <SvgUri
        width="100%"
        height="100%"
        uri="https://www.flaticon.com/premium-icon/icons/svg/2918/2918706.svg"
      />
    </View>
  );
};

export default apple;
