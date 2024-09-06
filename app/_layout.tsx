import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Rootlayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          gestureDirection: "vertical",
          animation: "fade",
        }}
      />
    </GestureHandlerRootView>
  );
};

export default Rootlayout;
