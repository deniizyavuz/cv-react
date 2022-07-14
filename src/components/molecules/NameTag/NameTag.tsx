import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Avatar, NameTag } from "./NameTag.style";

export default function NameTagCV() {
    const { width, height } = useWindowDimensions();
    return (

        <NameTag>
            <div>
                <p><b>DENİZ</b> YAVUZ</p>
                <p style={{ fontSize: '20px' }}>Front End Developer</p>
            </div>
            <div>
                <Avatar size={height * 0.25} alt="Little Girl" src={require('../../../assets/CVPage/programmer.png')} />
            </div>
        </NameTag>
    )

}