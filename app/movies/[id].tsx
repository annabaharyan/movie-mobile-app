import {View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

const MovieDetails=()=>{
  const {id}=useLocalSearchParams()
  return (
    <View>
      <Text>Movie Details: {id}</Text>
    </View>
  )
}
export default MovieDetails