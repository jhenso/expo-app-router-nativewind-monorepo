import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@native/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <View>
            <View className="items-center mx-7">
                <Text
                    className="text-center text-lg leading-6"
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Open up the code for this screen:
                </Text>

                <View className="rounded-md px-1 my-2" darkColor="rgba(255,255,255,0.05)" lightColor="rgba(0,0,0,0.05)">
                    <MonoText>{path}</MonoText>
                </View>

                <Text
                    className="text-center text-lg leading-6"
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Change any of the text, save the file, and your app will automatically update.
                </Text>
            </View>

            <View className="mt-2 mx-7 items-center">
                <ExternalLink
                    className="py-8"
                    href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
                >
                    <Text className="text-center" lightColor={Colors.light.tint}>
                        Tap here if your app doesn&apos;t automatically update after making changes
                    </Text>
                </ExternalLink>
            </View>
        </View>
    );
}
