import styled from "styled-components";

interface Props {
    width: number;
    height: number;
    size: number;
}

export const NameTag = styled.div`
    color: white;
    display : flex !important;
    justify-content : space-between !important;
    align-items : center;
    padding : 0 10%;
    font-size : 30px;
    line-height :0.2;
    z-index: 2;
`

export const Avatar = styled.img<Pick<Props, 'size'>>`
    width : ${props => props.size}px;
    height : ${props => props.size}px;
    border-radius : ${props => props.size / 2}px;
    margin-top : ${props => props.size / 2}px;
    z-index: 3;
    display: flex;
    `