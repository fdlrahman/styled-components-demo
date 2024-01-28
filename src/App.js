import { ThemeProvider, createGlobalStyle } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import StyledButton, {
    FancyButton,
    SubmitButton,
    DarkButton,
} from "./components/Button/Button";
import AnimatedLogo from "./components/AnimatedLogo/AnimatedLogo";

const theme = {
    dark: {
        primary: "#000",
        text: "#FFF",
    },
    light: {
        primary: "#FFF",
        text: "#000",
    },
};

const GlobalStyle = createGlobalStyle`
    button {
        font-family: 'Segoe UI', sans-serif;
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />

            <div className="App">
                <AnimatedLogo src={logo} />
                <div>
                    <br />
                </div>
                <StyledButton>Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <StyledButton variant="outline">Styled Button</StyledButton>
                <div>
                    <br />
                </div>
                <FancyButton>Fancy Button</FancyButton>
                <div>
                    <br />
                </div>
                <SubmitButton>Submit Button</SubmitButton>
                <div>
                    <br />
                </div>
                <DarkButton>Dark Button</DarkButton>
            </div>
        </ThemeProvider>
    );
}

export default App;
