import styled from "styled-components";

interface Props {
    height: number;
    width: number;
    size: number;
}

export const Greeting = styled.div`
    flex-direction: row;
    display: flex;
    align-self: center;
    justify-content: space-between;
`;

export const Payments = styled.img<Pick<Props, 'width'>>`
width: ${(p) => p.width * 0.22}px;
`