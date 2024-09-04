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
      <View style={{ height: height / 2 }}>
        <FlatList
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
      </View>
      <Carousel title="Albums" photos={photos.slice(0, 2)} />
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
