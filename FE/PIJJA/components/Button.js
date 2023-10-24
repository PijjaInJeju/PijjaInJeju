import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.stageButton,
        pressed && { backgroundColor: '#ffffff' },
        buttonStyle,
      ]}
      onPressOut={onPress}
    >
      <Text>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  stageButton: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
  },
});

export default Button;
