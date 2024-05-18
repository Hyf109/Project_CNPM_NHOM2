import React from "react";
import { Element } from "react-scroll";

import './Donate.scss'

import FadeInSection from "components/effects/fadeEffects";

// images
import QR1 from 'components/assets/images/Nguyen Thanh Huy - BIDV.png'
import QR2 from 'components/assets/images/Do Dinh Dung - BIDV.png'

function Donate() {
    return (
        <>
            <Element name="donateUs" className="donate-us">

                <h1>
                    Buy me a Coffee <i className="fa-solid fa-mug-hot"></i>
                </h1>

                <div className="qr-code-donate">
                    <div className="qr-code">
                        <img src={QR1} alt="Nguyen Thanh Huy - BIDV"></img>
                        <p>Nguyen Thanh Huy - BIDV</p>
                    </div>
                    <div className="qr-code">
                        <img src={QR2} alt="Do Dinh Dung - BIDV"></img>
                        <p> Do Dinh Dung - BIDV</p>
                    </div>
                </div>
                <p>or you can click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">here</a> to Donate!</p>
            </Element>
        </>
    )
}

export default Donate