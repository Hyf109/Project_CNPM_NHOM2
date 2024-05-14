import React from "react"
import './Footer.scss'

function Footer() {
    return (
        <div>
            <footer>
                <p>
                    &copy; {new Date().getFullYear()} Finder
                </p>
            </footer>
        </div>
    )
}

export default Footer