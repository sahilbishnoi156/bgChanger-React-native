import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import React from 'react';

export default function App() {
  const [squareRotation] = React.useState(new Animated.Value(0));
  const [circleRotation] = React.useState(new Animated.Value(0));
  const [traingleRotation] = React.useState(new Animated.Value(0));
  const [rectRotation] = React.useState(new Animated.Value(0));
  const [randomColor, setRandomColor] = React.useState({
    main: '',
    square: '#ffffff',
    circle: '#ffffff',
    triangle: '#ffffff',
    rect: '#ffffff',
  });

  const handleRotate = () => {
    Animated.timing(squareRotation, {
      toValue: Math.random() * 360,
      duration: 1000, // Transition duration in milliseconds
      useNativeDriver: true, // Optimize performance
    }).start();
    Animated.timing(circleRotation, {
      toValue: Math.random() * 360,
      duration: 1000, // Transition duration in milliseconds
      useNativeDriver: true, // Optimize performance
    }).start();
    Animated.timing(traingleRotation, {
      toValue: Math.random() * 360,
      duration: 1000, // Transition duration in milliseconds
      useNativeDriver: true, // Optimize performance
    }).start();
    Animated.timing(rectRotation, {
      toValue: Math.random() * 360,
      duration: 1000, // Transition duration in milliseconds
      useNativeDriver: true, // Optimize performance
    }).start();
  };

  // Interpolate rotation value to degrees
  const squareSpin = squareRotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const circleSpin = circleRotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const triangleSpin = traingleRotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const rectSpin = rectRotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let main = '#';
    let square = '#';
    let circle = '#';
    let rect = '#';
    let triangle = '#';

    for (let i = 0; i < 6; i++) {
      main += hexRange[Math.floor(Math.random() * 16)];
      square += hexRange[Math.floor(Math.random() * 16)];
      circle += hexRange[Math.floor(Math.random() * 16)];
      rect += hexRange[Math.floor(Math.random() * 16)];
      triangle += hexRange[Math.floor(Math.random() * 16)];
    }

    setRandomColor({
      main: main,
      square: square,
      circle: circle,
      rect: rect,
      triangle: triangle,
    });

    Vibration.vibrate(500);
  };
  return (
    <View style={[styles.container, {backgroundColor: randomColor.main}]}>
      <View style={styles.row}>
        <Animated.View style={{transform: [{rotate: squareSpin}]}}>
          <View
            style={[styles.square, {backgroundColor: randomColor.square}]}
          />
        </Animated.View>
        <Animated.View style={{transform: [{rotate: circleSpin}]}}>
          <View style={[styles.circle, {backgroundColor: randomColor.circle}]}>
            <Text style={styles.circleText}>CIRCLE</Text>
          </View>
        </Animated.View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            generateRandomColor();
            handleRotate();
          }}>
          <Text style={styles.buttonText}>Change Color</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Animated.View style={{transform: [{rotate: triangleSpin}]}}>
          <View
            style={[styles.triangle, {borderBottomColor: randomColor.triangle}]}
          />
        </Animated.View>
        <Animated.View style={{transform: [{rotate: rectSpin}]}}>
          <View
            style={[styles.rectangle, {backgroundColor: randomColor.rect}]}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  // Button
  button: {
    backgroundColor: '#5E2E05',
    padding: 8,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Shapes
  square: {
    height: 100,
    width: 100,
    borderRadius: 5,
    transform: 'rotate(20deg)',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: 'rotate(-20deg)',
  },
  rectangle: {
    width: 140,
    height: 90,
    borderRadius: 8,
    transform: 'rotate(-60deg)',
  },
});
