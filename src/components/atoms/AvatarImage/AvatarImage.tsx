import styled from "styled-components";

interface Props {
    height: number;
    width: number;
    size: number;
}

export const AvatarImage = styled.img<Pick<Props, 'height'>>`
height: ${(p) => p.height * 0.6}px;
`