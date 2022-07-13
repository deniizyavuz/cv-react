import React from 'react'
import styled from 'styled-components'
import { Footer, Greeting, Screen, SubTitle } from '../../components/MyComponents'
import TopNav from '../TopNav'
import useWindowDimensions from '../../hooks/useWindowDimensions'

interface Props {
    height: number;
    width: number;
}

const FlexScreen = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    `

const Heading = styled.div`
    font-size:50px;
    color: #A889E6;
    line-height: 1;
    `

const Describe = styled.p`
    font-size: 24px;
`

const ButtonsHead = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
`
const HireMe = styled.button`
width:140px;
width: 140px;
align-items: center;
border-radius: 10px;
background: #DA6868;
border-width: 0;
height: 60px;
margin: auto;
margin-left: 0;
margin-right: 0;
box-shadow: 0 16px 28px 0 rgb(218 104 104 / 43%);
`

const HireMeButton = styled.p`
font-weight: bold;
color: white;
font-size: 20px;
`

const Payments = styled.img<Pick<Props, 'width'>>`
width: ${(p) => p.width * 0.22}px;
`

const RightSideScreen = styled.div`
justify-content: center;
align-items: center;
display: flex;
`

const AvatarImage = styled.img<Pick<Props, 'height'>>`
height: ${(p) => p.height * 0.6}px;
`

const FooterHeading = styled.div`
padding: 10px;
`

export default function HomeScreen() {
    const { height, width } = useWindowDimensions();
    return (
        <div>
            <TopNav />
            <Screen>
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
                            <HireMe title='Hime Me'>
                                <HireMeButton>
                                    Hire Me
                                </HireMeButton>
                            </HireMe>
                            <Payments alt="payments" src={require('../../assets/HomePage/payments.png')} width={width} />
                        </ButtonsHead>
                    </FlexScreen>
                    <RightSideScreen>
                        <AvatarImage alt="girl" src={require('../../assets/HomePage/IdleGirl.png')} height={height} />
                    </RightSideScreen>
                </Greeting>
                <Footer>
                    <FooterHeading>
                        <SubTitle>
                            Jobs done successful
                        </SubTitle>
                        <p>
                            You can view the jobs by clicking the button.
                        </p>
                    </FooterHeading>
                    <FooterHeading>
                        <SubTitle>
                            Information about my services
                        </SubTitle>
                        <p>
                            You can view my services.
                        </p>
                    </FooterHeading>
                    <FooterHeading>
                        <SubTitle>
                            Download CV
                        </SubTitle>
                        <p>
                            You can download my CV by clicking the button.
                        </p>
                    </FooterHeading>
                </Footer>
            </Screen>
        </div >
    )
}
