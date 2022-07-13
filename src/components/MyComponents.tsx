import styled from "styled-components";

interface Props {
    height: number;
    width: number;
}
export const Bar = styled.div`
    display : flex;
    align-items : center;
    justify-content: flex-end;
    z-index : 99;
    position : fixed;
    background : white;
`;

export const Screen = styled.div`
display:flex;
flex-direction:column;
padding-top : 0.05px;
`

export const Greeting = styled.div`
    flex-direction: row;
    display: flex;
    align-self: center;
    justify-content: space-between;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
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

export const MyButton = styled.div`
    width: 100%;
    height: 6%;
    background: #000000;
`;

export const SubTitle = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color:#DA6868;
    letter-spacing: -0.015em;
`;

export const CVHeader = styled.div`
    background : #A889E6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-4deg);
    position : absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 300px;
`