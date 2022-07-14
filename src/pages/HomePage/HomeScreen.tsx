import React from 'react'
import { Screen } from '../../components/molecules/FScreen/Screen'
import Footer1 from '../../components/organisms/Footer/Footer'
import GreetingHome from '../../components/organisms/Greeting/Greeting'
import TopNav from '../../components/organisms/TopNav/TopNav'

export default function HomeScreen() {
    return (
        <div>
            <TopNav />
            <Screen>
                <GreetingHome />
                <Footer1 />
            </Screen>
        </div >
    )
}
