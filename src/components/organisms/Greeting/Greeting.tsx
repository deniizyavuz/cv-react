import React from "react"
import useWindowDimensions from "../../../hooks/useWindowDimensions"
import { Describe, Heading, RightSideScreen } from "../../../pages/HomePage/HomeScreen.style"
import { AvatarImage } from "../../atoms/AvatarImage/AvatarImage"
import { ButtonsHead } from "../../atoms/Buttons/Buttons"
import { FlexScreen } from "../../molecules/FlexScreen/FlexScreen"
import Hire from "../../molecules/HireMe/HireMe"
import { Greeting, Payments } from "./Greeting.style"

export default function GreetingHome() {
    const { height, width } = useWindowDimensions();
    return (
        <Greeting>
            <FlexScreen>
                <div>
                    <Heading>
                        Hi! I am Deniz Yavuz
                    </Heading>
                    <Describe>
                        I am a student at Information Systems Engineering
                    </Describe>
                </div>
                <ButtonsHead>
                    <Hire />
                    <Payments alt="payments" src={require('../../../assets/HomePage/payments.png')} width={width} />
                </ButtonsHead>
            </FlexScreen>
            <RightSideScreen>
                <AvatarImage alt="girl" src={require('../../../assets/HomePage/IdleGirl.png')} height={height} />
            </RightSideScreen>
        </Greeting>
    )
}