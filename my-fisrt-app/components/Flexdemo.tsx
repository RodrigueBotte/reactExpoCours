import { View } from "react-native";
import { s } from "./FlexDemo.style.js";

export function FlexDemo() {
    return (
        <View style={s.container}>
            <View style={s.box1}></View>
            {/* <View style={s.box2}></View>
            <View style={s.box3}></View> */}
        </View>
    )
}