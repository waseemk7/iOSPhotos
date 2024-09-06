import { Image, Text } from "react-native";
import { photos } from "../../data";
import { useLocalSearchParams } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const PhotosScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const photo = photos.find((p) => p.id === Number.parseInt(id));

  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = 1;
    scale.value = withTiming(2, { duration: 5000 });
  }, []);

  if (!photo) {
    return <Text>Photo not found</Text>;
  }

  return (
    <Animated.Image
      source={photo?.image}
      style={[
        { width: "100%", height: "100%", transform: [{ scale: 1.5 }] },
        animatedStyle,
      ]}
      resizeMode="contain"
    />
  );
};

export default PhotosScreen;
