import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import MyForm from "./MyForm";

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  margin: 20px;
`;

function App() {
  const appTheme = createTheme();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <CenteredContainer display={"flex"} style={{ justifyContent: "center" }}>
        <MyForm />
        {/* <Login/> */}
      </CenteredContainer>
    </ThemeProvider>
  );
}

export default App;
