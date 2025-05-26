import { styles } from "@/styles/home.styles";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi There 123</Text>
      <TouchableOpacity>
        <Text style={styles.title}>Touch Here</Text>
      </TouchableOpacity>
      <Pressable>
        <Text>Press This Button</Text>
      </Pressable>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1745563115146-aec349b7cadf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
        }}
      />
    </View>
  );
}
