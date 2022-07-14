import React from 'react'
import { SubTitle } from '../../atoms/SubTitle/SubTitle'
import { Footer, FooterHeading } from './Footer.style'

export default function Footer1() {
    return (
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

    )
}
