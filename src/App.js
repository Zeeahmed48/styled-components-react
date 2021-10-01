import { ThemeProvider } from "styled-components";
import { theme } from "./theme"
import { Container } from "./components/styles/Container.styled.js"
import GlobalStyles from "./components/styles/Global"
import { Header } from "./components/Header"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <h2>
          body
        </h2>
      </Container>
    </ThemeProvider>
  );
}

export default App;
