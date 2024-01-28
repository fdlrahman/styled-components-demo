import styled from "styled-components";

export const StyledButton = styled.button`
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #3498db;
    color: ${(props) => (props.variant === "outline" ? "#3498db" : "#FFF")};
    background-color: ${(props) =>
        props.variant === "outline" ? "#FFF" : "#3498db"};
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

    &:hover {
        color: ${(props) => (props.variant !== "outline" ? "#3498db" : "#FFF")};
        background-color: ${(props) =>
            props.variant !== "outline" ? "#FFF" : "#3498db"};
    }
`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #ff66b2, #4d79ff);
    border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
    type: "submit",
})`
    box-shadow: 0 9px #999;

    &:active {
        background-color: ${(props) =>
            props.variant !== "outline" ? "#FFF" : "#3498db"};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`;

export const DarkButton = styled(StyledButton)`
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
    border: none;
`;
