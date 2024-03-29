import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Bar, NavButton } from './TopNav.style';



export default function TopNav() {
    const location = useLocation();
    return (
        <Bar>
            <div>
                <Link to={"/"}>
                    <NavButton disabled={location.pathname === "/"}>
                        Home
                    </NavButton>
                </Link>
                <Link to={"/cv"}>
                    <NavButton disabled={location.pathname === "/cv"}>
                        About Me
                    </NavButton>
                </Link>
                <Link to={"/contact"}>
                    <NavButton disabled={location.pathname === "/contact"}>
                        Contact
                    </NavButton>
                </Link>
            </div>
        </Bar>
    )
}
