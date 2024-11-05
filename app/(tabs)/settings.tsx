import { useDarkOrLight } from "@/stores/theme-store";
import { Text, useColorScheme, Appearance, View, Pressable, Switch } from "react-native";

interface settingsProps {

}

export default function settings({}:settingsProps){
const {darkOrLight,setDarkOrLight} = useDarkOrLight();
return (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Settings</Text>
    <Text>{darkOrLight}</Text>
    <Pressable
      onPress={() => Appearance?.setColorScheme(darkOrLight === "light" ? "dark" : "light")}>
      <Text>Switch to {darkOrLight === "light" ? "dark" : "light"} mode</Text>
    </Pressable>
    <Switch
      style={{ marginTop: 20 }}
      // trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={darkOrLight === "light" ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={(bool) => setDarkOrLight(bool ? "light" : "dark")}
      value={darkOrLight === "light"}
    />
  </View>
);
}
