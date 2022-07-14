import React from 'react'
import ContactInfo from '../../components/atoms/ContactInfo/ContactInfo';
import ProfileTitle from '../../components/atoms/ProfileTitle/ProfileTitle';
import { Screen } from '../../components/molecules/FScreen/Screen';
import NameTagCV from '../../components/molecules/NameTag/NameTag';
import TopNav from '../../components/organisms/TopNav/TopNav'
import { CVHeader, FlexBox, LeftScreen, MutedText, MutedTitle, OverFlow, SectionBox, SpaceBetween, SubTitle, Title } from './CVScreen.style';

const skillList = require("../../utils/skillList.json")
const experienceList = require("../../utils/experienceList.json")
const degreeList = require("../../utils/degreeList.json")

interface degree {
    degreeTitle: string,
    universityName: string,
    program: string,
    startDate: string,
    endDate: string,
}

interface experience {
    jobTitle: string,
    period: number,
    companyName: string,
    description: string,
}



export default function CVScreen() {
    console.log(degreeList);
    return (
        <OverFlow>
            <TopNav />
            <CVHeader />
            <Screen>
                <NameTagCV />
                <FlexBox>
                    <LeftScreen>
                        <ContactInfo />
                        <SectionBox>
                            <Title>
                                SKILLS
                            </Title>
                            <MutedTitle>
                                PROFESSIONAL
                            </MutedTitle>
                            {
                                skillList.map((skill: string, skillIndex: number) => {
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
                                degreeList.map((degree: degree, degreeIndex: any) => {
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
                    </LeftScreen>
                    <div>
                        <ProfileTitle />
                        <SectionBox>
                            <Title>
                                EXPERIENCE
                            </Title>
                            {
                                experienceList.map((item: experience, index: number) => {
                                    return (
                                        <div key={index}>
                                            <SpaceBetween>
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
                                            </SpaceBetween>
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
        </OverFlow>
    )
}



//resimin altındaki siyah yer img resize mode
//headercv yandaki boşluk