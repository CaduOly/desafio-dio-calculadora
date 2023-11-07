import styled from "styled-components";

export const ButtonContainer = styled.button`
width: 30%;
    padding: 20px;
    border: 1px solid #272D4D;
    background-color: ${props => (props.isEquals ? '#FF69B4' : '#343957')};
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;

    &:hover {
        opacity:0.6;
    }
`;
