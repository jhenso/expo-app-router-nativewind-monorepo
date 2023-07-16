import EditScreenInfo from "@dg/expo/components/EditScreenInfo";
import { Text, View } from "@dg/expo/components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold">Tab One</Text>
            <View className="h-px w-4/5 my-7" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
    );
}
