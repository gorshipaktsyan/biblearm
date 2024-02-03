import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";

const [StyledContainer, StyledContent, StyledLeftArrow, StyledRightArrow] =
  FooterStyledComponents;

export default function Header({
  onPreviousPress,
  onSearchPress,
  onPress,
  onNextPress,
  isPreviousDisabled,
  isNextDisabled,
  currentBook,
  currentChapter,
}) {
  return (
    <StyledContainer>
      <StyledContent>
        <TouchableOpacity
          onPress={onPreviousPress}
          disabled={isPreviousDisabled}
        >
          <Text>Content</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress} disabled={isNextDisabled}>
          <Text>Annotations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress} disabled={isNextDisabled}>
          <Text>Bookmarks</Text>
        </TouchableOpacity>
      </StyledContent>
    </StyledContainer>
  );
}
