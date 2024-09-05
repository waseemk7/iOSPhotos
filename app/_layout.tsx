import { Stack } from "expo-router";

const Rootlayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureDirection: "vertical",
        animation: "fade",
      }}
    />
  );
};

export default Rootlayout;
