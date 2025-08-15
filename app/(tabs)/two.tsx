import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets();
  // const router = useRouter();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      {/* <Button title='GOT TO TAB' onPress={() => router.navigate("/")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({

});
