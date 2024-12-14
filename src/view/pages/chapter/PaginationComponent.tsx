import { Box, Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/system";

interface PaginationComponentProps {
  totalChapters: number; // Total number of chapters
  currentChapter: number; // Current chapter number
}

export default function PaginationComponent({
  totalChapters,
  currentChapter,
}: PaginationComponentProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      {/* Left Side Label */}
      <Box sx={{ marginRight: 2, fontWeight: "bold", fontSize: "1rem" }}>
        Հետ
      </Box>

      {/* Pagination Component */}
      <StyledPagination
        count={totalChapters}
        page={currentChapter}
        // onChange={onChange}
        size="large"
        siblingCount={0} // Only show the current page
        boundaryCount={totalChapters} // Show all pages without ellipsis
        renderItem={(item) => <PaginationItem {...item} />}
      />

      {/* Right Side Label */}
      <Box sx={{ marginLeft: 2, fontWeight: "bold", fontSize: "1rem" }}>
        Առաջ
      </Box>
    </Box>
  );
}

const StyledPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    fontSize: "1rem", // Adjust font size if needed
    minWidth: "32px", // Ensure consistent button width
  },
});
