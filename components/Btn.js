import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Btn({ onPress, text }) {
  return (
    <>
      <View>
        <TouchableOpacity style={s.btn} onPress={onPress}>
          <Text style={s.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  btn: {
    // flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  text: {
    // flex: 1,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    alignItems: "center",
    color: "#ffffff",
    // justifyContent: 'center',
  },
});
