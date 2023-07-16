import EditScreenInfo from "@dg/expo/components/EditScreenInfo";
import { Text, View } from "@dg/expo/components/Themed";

export default function TabTwoScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold">Tab Two</Text>
            <View className="h-px w-4/5 my-7" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/(tabs)/two.tsx" />
        </View>
    );
}
