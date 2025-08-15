import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TabBarIcon } from '@/components/tabBarIcon';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Menu',
            // tabBarItemStyle: {
            //   backgroundColor: "#EB3030"
            // },
            tabBarActiveTintColor: "#EB3030",
            tabBarIcon: () => <TabBarIcon name="home" color={"#EB3030"} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Tab Two',
            tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
