import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Apka = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={[
          styles.container,
          {
            flex: 1,
            flexDirection: "row",
            backgroundColor: "blue",
          },
        ]}
      >
        <Button
          title="<"
          onPress={() => console.log("ButtonPressed")}
          color="black"
          allignItems="flex-start"
          justifyContent="flex-start"
        >
          {" "}
        </Button>
        <Button title=">" color="black"></Button>
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
          background: "Black",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 40, color: "blue", fontWeight: "bold" }}>
          Front-end
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ fontSize: 40, color: "black", fontWeight: "bold" }}>
          Back-end
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Przykładowy kolor tła dla container
  },
});

export default Apka;
