import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text } from "../../components/Themed";
import LottieView from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
    >
        <View style={styles.container}>
          <Text style={styles.title}>Loco</Text>
          <LottieView
            source={require("../../lottie-animations/Animation - 1704440966123.json")}
            style={{
              width: 400,
              height: 400,
              alignSelf: "center",
            }}
            loop={true}
          />
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                padding: 20,
                borderRadius: 32,
                width: 300,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: 20,
                  color: "white",
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 16 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "300",
                  fontSize: 16,
                  color: "black",
                  paddingTop: 20,
                }}
              >
                Already have an account?
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "black",
                  paddingTop: 20,
                }}
              >
                Log in
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
