import React from 'react'
import styled from 'styled-components';
import { CVHeader, Screen } from '../../components/MyComponents';
import TopNav from '../TopNav'
import { degreeList, experienceList, skillList } from '../../enum';
import useWindowDimensions from '../../hooks/useWindowDimensions'

interface Props {
    height: number;
    width: number;
    size: number;
}

const NameTag = styled.div`
    color: white;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0 10%;
    font-size : 30px;
    line-height :0.2;
`

const Avatar = styled.img<Pick<Props, 'size'>>`
    width : ${props => props.size}px;
    height : ${props => props.size}px;
    border-radius : ${props => props.size / 2}px;
    background: red;
    margin-top : ${props => props.size / 2}px;
    resize: block;
    z-index: 3;
    position:absolute;
    `

const Title = styled.h1`
    letter-spacing: 0.4em;
    font-weight: 700;
    font-size: 33px;
    line-height : 0;
`

const MutedTitle = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    color: #C4C4C4;
`


const SubTitle = styled.h4`
    font-weight: 700;
    font-size: 20px;
    line-height : 0;
`

const FlexBox = styled.div`
    display: flex;
    padding: 10px 5%;
`

const SectionBox = styled.div`
    margin-top: 100px;
`

const MutedText = styled.p`
    color: #C4C4C4;
    line-height: 0.4;
`

export default function CVScreen() {
    const { width, height } = useWindowDimensions();
    return (
        <div style={{ overflow: 'hidden', maxWidth: '100%' }}>
            <TopNav />
            <CVHeader />
            <Screen>
                <NameTag>
                    <div>
                        <p><b>DENİZ</b> YAVUZ</p>
                        <p style={{ fontSize: '20px' }}>Front End Developer</p>
                    </div>
                    <div>
                        <Avatar size={height * 0.25} alt="Little Girl" src={require('../../assets/CVPage/programmer.png')} />
                    </div>
                </NameTag>
                <FlexBox>
                    <div style={{
                        width: width * 0.3,
                        padding: "0 30px",
                    }}>
                        <SectionBox>
                            <p>Çankaya,Ankara</p>
                            <p>05555555</p>
                            <p>example@gmail.com</p>
                        </SectionBox>
                        <SectionBox>
                            <Title>
                                SKILLS
                            </Title>
                            <MutedTitle>
                                PROFESSIONAL
                            </MutedTitle>
                            {
                                skillList.map((skill, skillIndex) => {
                                    return (
                                        <p key={skill}>
                                            {
                                                (skillIndex + 1) + ". " + skill
                                            }
                                        </p>
                                    )
                                })
                            }
                        </SectionBox>
                        <SectionBox>
                            <Title>
                                EDUCATION
                            </Title>
                            {
                                degreeList.map((degree, degreeIndex) => {
                                    return (
                                        <div key={degree.program}>
                                            <SubTitle>
                                                {
                                                    degree.degreeTitle
                                                }
                                            </SubTitle>
                                            <MutedText>
                                                {
                                                    degree.universityName
                                                }
                                            </MutedText>
                                            <MutedText>
                                                {
                                                    degree.program
                                                }
                                            </MutedText>
                                            <MutedText>
                                                {
                                                    degree.startDate + " - " + degree.endDate
                                                }
                                            </MutedText>

                                        </div>
                                    )
                                })
                            }
                        </SectionBox>
                    </div>
                    <div>
                        <SectionBox>
                            <Title>
                                PROFILE
                            </Title>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </SectionBox>
                        <SectionBox>
                            <Title>
                                EXPERIENCE
                            </Title>
                            {
                                experienceList.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}>
                                                <MutedTitle>
                                                    {
                                                        item.jobTitle
                                                    }
                                                </MutedTitle>
                                                <MutedTitle>
                                                    {
                                                        item.period
                                                    }
                                                </MutedTitle>
                                            </div>
                                            <SubTitle>
                                                {item.companyName}
                                            </SubTitle>
                                            <p>
                                                {
                                                    item.description
                                                }
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </SectionBox>
                    </div>
                </FlexBox>
            </Screen>
        </div>
    )
}



//resimin altındaki siyah yer img resize mode
//headercv yandaki boşluk