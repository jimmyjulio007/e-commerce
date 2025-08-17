import { Image, Text, View } from "react-native";

type CardPriceProps = {
    hasPayOff?: boolean,
    product: string,
    description: string,
    price: number,
    reduce?: string,
    hasNote?: boolean,
    note?: number,
    promo?: string,
    image: any
}

export default function CardPrice({ hasPayOff, hasNote, product, description, price, promo, reduce, note, image }: CardPriceProps) {
    return (
        <View style={{ backgroundColor: "#FFF", borderRadius: 6, flexShrink: 0 }}>
            <Image
                resizeMode='cover'
                source={image}
                style={{ height: 167, width: 170, borderRadius: 4 }}
            />
            <Text style={{ fontSize: 12, fontWeight: 500, lineHeight: 16 }}>{product}</Text>
            <Text style={{ maxWidth: 162, fontSize: 10, lineHeight: 16 }}>{description}</Text>
            <Text style={{ fontSize: 12, fontWeight: 500, lineHeight: 16 }}>₹{price}</Text>
            {hasPayOff &&
                <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <Text style={{ color: "#BBB", fontSize: 12, fontWeight: 500, lineHeight: 16, textDecorationLine: "line-through" }}>₹{reduce}</Text>
                    <Text style={{ fontSize: 10, lineHeight: 16, color: "#FE735C" }}>{promo}</Text>
                </View>
            }
            {hasNote &&
                <View>
                    <Text>{note}</Text>
                </View>
            }
        </View>
    )
}