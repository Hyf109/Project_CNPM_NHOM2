import React from "react"
import './Footer.scss'

function Footer() {
    return (
        <div>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} Finder, UET SE - Project, Group 2, LLC, All Rights Reversed
                </p>
            </footer>
        </div>
    )
}

export default Footer