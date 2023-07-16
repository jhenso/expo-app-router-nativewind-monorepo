import { Link, Stack } from "expo-router";

import { Text, View } from "@dg/expo/components/Themed";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View className="flex-1 items-center justify-center p-10">
                <Text className="text-xl font-bold">This screen doesn&apos;t exist.</Text>

                <Link href="/" className="inline-block mt-10 py-10">
                    <Text className="text-lg text-blue-700">Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
}
