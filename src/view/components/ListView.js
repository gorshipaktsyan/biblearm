import * as React from "react";
import { Text, Divider } from "native-base";
import { TouchableOpacity } from "react-native";

export default function ListView({ handlePress, books }) {
  return (
    <>
      {books.map((book) => {
        return (
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => handlePress(book)}
            key={book.name}
          >
            <Text style={{ fontSize: 20, marginBottom: 10 }}>{book.name}</Text>
            <Divider />
          </TouchableOpacity>
        );
      })}
    </>
  );
}
