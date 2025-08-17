import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TabBarIcon } from '@/components/tabBarIcon';


export default function TabLayout() {
  // const colorScheme = useColorScheme();

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
