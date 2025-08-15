import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../../assets/images/logo.svg"
import Menu from "../../assets/images/menu.svg"

export default function NavBar() {
    return (
        <View style={styles.container} >
            <TouchableOpacity >
                <Menu style={styles.menu} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Logo />
                <Text style={styles.logoText}>Stylish</Text>
            </View>
            <View>
                <Image width={40} height={40} source={require('../../assets/images/avatar.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        alignItems: "center"
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 9
    },
    logoText: {
        color: "#4392F9",
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 22
    },
    menu: {
        borderRadius: 999,
        backgroundColor: "#F2F2F2",
        padding: 4,
    }
})