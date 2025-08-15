import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "./tabBarIcon";
import { FontAwesome } from "@expo/vector-icons";

type TipsProps = {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    text: string
}

export default function Tips({ name, text }: TipsProps) {
    return (
        <TouchableOpacity>
            <View style={styles.tips}>
                <Text style={{ fontSize: 12, lineHeight: 16 }}>{text}</Text>
                <TabBarIcon name={name} color="black" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tips: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
        boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.08)",
        borderRadius: 6
    }
})