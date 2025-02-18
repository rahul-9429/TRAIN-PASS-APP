import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const MarqueeWithoutLibrary = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width; // Get screen width
  const textWidth = 300; // Adjust to match the expected text width

  useEffect(() => {
    const startAnimation = () => {
      translateX.setValue(screenWidth); // Start the text off-screen to the right
      Animated.loop(
        Animated.timing(translateX, {
          toValue: -textWidth, // Move the text off-screen to the left
          duration: 5000, // Adjust the speed of the animation
          useNativeDriver: true,
        })
      ).start();
    };

    startAnimation();
  }, [translateX, screenWidth, textWidth]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.marqueeText,
          { transform: [{ translateX }] },
        ]}
      >
        This is a marquee text scrolling endlessly from right to left.
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50, // Height of the marquee container
    overflow: 'hidden', // Ensures text doesn't appear outside the container
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marqueeText: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    position: 'absolute', // Absolute positioning for smooth animation
  },
});

export default MarqueeWithoutLibrary;
