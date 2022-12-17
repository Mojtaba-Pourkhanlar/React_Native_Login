import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./app/containers/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
