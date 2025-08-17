import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavBar from '@/components/page/navbar';
import { TabBarIcon } from '@/components/tabBarIcon';
import Tips from '@/components/tips';

import Beauty from "../../assets/images/beauty.svg"
import Fashion from "../../assets/images/fashion.svg"
import Kids from "../../assets/images/kids.svg"
import Mens from "../../assets/images/mens.svg"
import Womens from "../../assets/images/womens.svg"
import { Image } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import CardPrice from '@/components/cardPrice';

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
  const TAB_BAR_HEIGHT = useBottomTabBarHeight();

  return (
    <View style={{ flexDirection: "column", paddingHorizontal: 16, paddingTop: insets.top, gap: 16, backgroundColor: "#FDFDFD" }}>
      <NavBar />
      <View style={styles.inputContainer}>
        <TabBarIcon name="search" color={"#BBBBBB"} />
        <TextInput style={{ flex: 1, paddingLeft: 8 }} placeholder='Search any product' placeholderTextColor={"#BBBBBB"} />
        <TabBarIcon name="microphone" color={"#BBBBBB"} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + insets.bottom + 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={{ flexDirection: "column", gap: 16 }}>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 18, fontWeight: 600, lineHeight: 22 }}>All Featured</Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Tips name="cart-arrow-down" text='cart' />
              <Tips name="filter" text='Filter' />
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <FlatList
              style={{ backgroundColor: "#FFF" }}
              contentContainerStyle={{ gap: 16 }}
              horizontal
              data={ItemsCard}
              showsHorizontalScrollIndicator={false}
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
              alignItems: "flex-start",
            }}
            resizeMode='cover'
            source={img}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={{ paddingVertical: 40, paddingHorizontal: 14, flexDirection: "column", gap: 12 }}>
              <View style={{ flexDirection: "column", gap: 6 }}>
                <Text style={styles.titleCard}>50-40% OFF</Text>
                <Text style={styles.textCard}>Now in (product)</Text>
                <Text style={styles.textCard}>All colours</Text>
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 12, fontWeight: 600, lineHeight: 16, color: "#FFF" }}>Shop Now</Text>
                <TabBarIcon name="long-arrow-right" color={"#FFF"} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={{ padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#4392F9", borderRadius: 8 }}>
            <View style={{ flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
              <Text style={{ fontSize: 16, lineHeight: 20, fontWeight: 500, color: "#FFF" }}>Deal of the Day</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                <TabBarIcon name="clock-o" color={"#FFF"} />
                <Text style={{ fontSize: 12, lineHeight: 16, color: "#FFF" }}>22h 55m 20s remaining </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontSize: 12, fontWeight: 600, lineHeight: 16, color: "#FFF" }}>View all</Text>
              <TabBarIcon name="long-arrow-right" color={"#FFF"} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", gap: 12, position: "relative" }}>
            <CardPrice price={1500} hasPayOff promo='40%Off' reduce='2499' product='Women Printed Kurta' description='Neque porro quisquam est qui dolorem ipsum quia' image={require('../../assets/images/girl.jpg')} />
            <CardPrice price={2499} hasPayOff promo='50%Off' reduce='4999' product='HRX by Hrithik Roshan' description='Neque porro quisquam est qui dolorem ipsum quia' image={require('../../assets/images/shoes.png')} />
            <TouchableOpacity style={{ position: "absolute", bottom: 101, right: 9, boxShadow: "6px 6px 4px 0 #DEDBDB inset, -6px -6px 4px 0 #C4C4C4 inset", borderRadius: 999, padding: 8 }}>
              <TabBarIcon name='chevron-circle-right' color='#232327' />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: "#FFFFFF", flexDirection: "row", alignItems: "flex-start", paddingVertical: 12, paddingHorizontal: 8, gap: 24 }}>
            <Image width={75} height={60} style={{width: 75, height: 60}} source={require('../../assets/images/offer.png')} resizeMode='cover'/>
            <View style={{flexDirection: "column", alignItems: "flex-start"}}>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <Text style={{fontSize: 16, lineHeight: 20, fontWeight: 500}}>Special Offers</Text>
                <Text>😱</Text>
              </View>
              <Text style={{maxWidth: 171, fontSize: 12, lineHeight: 16, fontWeight: 300}}>We make sure you get the offer you need at best prices</Text>
            </View>
          </View>
        </View>
      </ScrollView >
    </View >
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
  },
  textCard: {
    fontSize: 12,
    lineHeight: 16,
    color: '#FFF'
  },
  titleCard: {
    color: "#FFF", fontWeight: 700, lineHeight: 22, fontSize: 20
  },
  button: {
    padding: 8,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#FFF",
    borderWidth: 1
  }
});
