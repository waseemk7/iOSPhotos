import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { photos } from "./data";

type Carousel = {
  title: string;
  photos: any[];
};

const Carousel = ({ title }: Carousel) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.images}
        showsHorizontalScrollIndicator={false}
      >
        {photos.map((photo) => (
          <Image source={photo.image} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    padding: 15,
    fontWeight: "700",
    fontSize: 20,
  },
  images: { gap: 15, paddingHorizontal: 20 },
  image: { width: 250, height: 150, borderRadius: 20 },
});
