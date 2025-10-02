import { View, Text, Button } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Text>Movie Details: {id}</Text>
      <Text className="text-primary font-bold pt-20">
        <Button title="Go Back" onPress={() => router.push("/")} />
      </Text>
    </View>
  );
};
export default MovieDetails;
