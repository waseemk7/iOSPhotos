import { Image, Text } from "react-native";
import { photos } from "../../data";
import { useLocalSearchParams } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const PhotosScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const photo = photos.find((p) => p.id === Number.parseInt(id));

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  if (!photo) {
    return <Text>Photo not found</Text>;
  }

  const gesture = Gesture.Pinch()
    .onChange((e) => {
      scale.value = e.scale;
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.Image
        source={photo?.image}
        style={[
          { width: "100%", height: "100%", transform: [{ scale: 1.5 }] },
          animatedStyle,
        ]}
        resizeMode="contain"
      />
    </GestureDetector>
  );
};

export default PhotosScreen;
