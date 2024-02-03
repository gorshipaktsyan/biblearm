import * as React from "react";
import { Text, Divider, Box, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

export default function GridView({ handlePress, books }) {
  console.log("books", books);
  return (
    <Box
      style={{
        disable: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 50,
      }}
    >
      {books.map((book) => {
        return (
          <TouchableOpacity
            style={{ marginLeft: 15, marginTop: 10 }}
            onPress={() => handlePress(book)}
            key={book.name}
          >
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              {book.abbreviation}
            </Text>
            <Divider />
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}
