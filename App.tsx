import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { photos } from "./data";
import Carousel from "./Carousel";

export default function App() {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <ScrollView
        horizontal
        style={{ height: height / 2 }}
        snapToInterval={width}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      >
        <FlatList
          style={{ width }}
          data={photos}
          numColumns={4}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          inverted
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          )}
        />
        <Image
          source={photos[0].image}
          style={{ width, height: "100%" }}
          resizeMode="cover"
        />
        <Image
          source={photos[10].image}
          style={{ width, height: "100%" }}
          resizeMode="cover"
        />
      </ScrollView>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          flexDirection: "row",
          gap: 5,
        }}
      >
        {Array(3)
          .fill(0)
          .map(() => (
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "gray",
                borderRadius: 5,
              }}
            />
          ))}
      </View>
      <Carousel title="Albums" photos={photos.slice(0, 10)} />
      <Carousel title="People" photos={photos.slice(3, 6)} />
      <Carousel title="Featured" photos={photos.slice(6, 9)} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
