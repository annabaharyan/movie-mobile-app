import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-lg text-primary">
        Welcome to Nativewind!
      </Text>
      <Link href='/onboarding'>Onboarding</Link>
      <Link href='/movie/avangers'>Avanger Movie</Link>
    </View>
  );
}
