import styled from "styled-components";

export const Bar = styled.div`
    display : flex;
    align-items : center;
    justify-content: flex-end;
    z-index :99;
    position : absolute;
    background : white;
    left: 0;
    right: 0;
    height: 50px;
`;

export const NavButton = styled.button`
    background:${(props) => props.disabled ? "#A889E6" : "white"};
    color:${(props) => props.disabled ? "white" : "#A889E6"};
    width: 100px;
    padding: 5px;
    margin:5px;
    border-radius:5px;
    border-width:0;
    font-size:16px;
`;