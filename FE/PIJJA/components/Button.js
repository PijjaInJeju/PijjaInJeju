import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

const Button = ({ title, onPress, buttonStyle }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
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
  button: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
  },
});

export default Button;
