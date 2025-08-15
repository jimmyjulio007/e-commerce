import { FlatList, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';

import { View } from '@/components/Themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavBar from '@/components/page/navbar';
import { TabBarIcon } from '@/components/tabBarIcon';
import Tips from '@/components/tips';

import Beauty from "../../assets/images/beauty.svg"
import Fashion from "../../assets/images/fashion.svg"
import Kids from "../../assets/images/kids.svg"
import Mens from "../../assets/images/mens.svg"
import Womens from "../../assets/images/womens.svg"


const ItemsCard = [
  {
    name: "Beauty",
    icon: <Beauty />
  },
  {
    name: "Fashion",
    icon: <Fashion />
  },
  {
    name: "Kids",
    icon: <Kids />
  },
  {
    name: "Mens",
    icon: <Mens />
  },
  {
    name: "Womens",
    icon: <Womens />
  }
]

const img = require('../../assets/images/shop.jpg')

export default function TabOneScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flexDirection: "column", paddingHorizontal: 16, paddingTop: insets.top, gap: 16, backgroundColor: "#FDFDFD" }}>
      <NavBar />
      <View style={styles.inputContainer}>
        <TabBarIcon name="search" color={"#BBBBBB"} />
        <TextInput style={{ flex: 1, paddingLeft: 8 }} placeholder='Search any product' placeholderTextColor={"#BBBBBB"} />
        <TabBarIcon name="microphone" color={"#BBBBBB"} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 18, fontWeight: 600, lineHeight: 22 }}>All Featured</Text>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Tips name="cart-arrow-down" text='cart' />
          <Tips name="filter" text='Filter' />
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <FlatList
          contentContainerStyle={{ gap: 16, backgroundColor: "#FFF" }}
          horizontal
          data={ItemsCard}
          renderItem={({ item }) =>
            <View style={styles.imgageTips}>
              {item.icon}
              <Text>{item.name}</Text>
            </View>
          }
        />
      </View>
      <ImageBackground
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start"
        }}
        resizeMode='cover'
        source={img}>
        <View>

        </View>
        <Text style={{paddingTop: 40}}>Hello</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    boxShadow: "0 2px 9px 0 rgba(0, 0, 0, 0.04)"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imgageTips: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4
  }
});
