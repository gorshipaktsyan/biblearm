import { Routes, Route } from "react-router-dom";
import { Box, CssBaseline, styled } from "@mui/material";
import routes from "../routes";

function App() {
  return (
    <StyledApp>
      <CssBaseline />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled(Box)({
  minHeight: "100dvh",
  padding: "100px 0 100px 0",
});
