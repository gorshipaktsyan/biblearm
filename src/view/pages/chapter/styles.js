import styled from "@emotion/styled";
import { Text } from "native-base";
import { View, ScrollView } from "react-native";

const HeaderStyledComponents = {
  StyledContainer: styled(View)({
    flex: 1,
  }),
  StyledContent: styled(ScrollView)({
    paddingBottom: 60,
  }),
  StyledVersesContainer: styled(View)({
    alignItems: "flex-start",
    paddingHorizontal: 5,
    paddingBottom: 40,
  }),
  StyledSubject1: styled(Text)({
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    color: "#000",
  }),
  StyledChapter: styled(Text)({
    fontSize: 16,
    marginTop: 10,
    color: "#000",
  }),
  StyledVerse: styled(View)({
    flexDirection: "row",
    marginTop: 7,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  }),
  StyledPrefix: styled(View)({
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
  }),
  StyledPrefixText: styled(Text)({
    textAlign: "center",
    marginTop: 5,
    color: "#000",
  }),
};

export default HeaderStyledComponents;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#EEEADD",
//   },
//   content: {
//     paddingBottom: 60,
//   },
//   title: {
//     textAlign: "center",
//     fontSize: 22,
//     fontWeight: "300",
//     marginBottom: 20,
//   },
//   headerContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   fullName: {
//     fontSize: 20,
//     textAlign: "center",
//   },
//   versesContainer: {
//     alignItems: "flex-start",
//     paddingHorizontal: 5,
//     paddingBottom: 40,
//   },
//   header: {
//     backgroundColor: "#F5FCFF",
//     padding: 10,
//   },
//   verse: {
//     flexDirection: "row",
//     marginTop: 7,
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//   },
//   chapter: {
//     fontSize: 16,
//     marginTop: 10,
//   },
//   headerText: {
//     textAlign: "center",
//     fontSize: 16,
//     fontWeight: "500",
//   },
//   subject1: {
//     fontSize: 16,
//     marginTop: 10,
//     paddingHorizontal: 15,
//     textAlign: "center",
//   },
//   chapterName: {
//     fontSize: 18,
//     marginTop: 10,
//   },
//   active: {
//     backgroundColor: "rgba(255,255,255,1)",
//   },
//   inactive: {
//     backgroundColor: "rgba(245,252,255,1)",
//   },
//   selectors: {
//     marginBottom: 10,
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   selector: {
//     backgroundColor: "#F5FCFF",
//     padding: 10,
//   },
//   activeSelector: {
//     fontWeight: "bold",
//   },
//   selectTitle: {
//     fontSize: 14,
//     fontWeight: "500",
//     padding: 10,
//   },
//   multipleToggle: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 30,
//     alignItems: "center",
//   },
//   multipleToggle__title: {
//     fontSize: 16,
//     marginRight: 8,
//   },
// });
