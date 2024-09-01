import React, { useEffect } from 'react';
import "../css/HeroSection.css";
function HeroSection() {
    return (
        <div className='HeroParent'>
            <div className='HeroChild'>
                <div className="Name">
                    <div>I'M Dilkhush</div>
                    <span>Front-end</span> Developer
                </div>
                <div className="Description">
                <div>"Design and develop responsive, user-friendly web interfaces,</div><div>driving project success through front-end expertise and collaboration."</div>
                </div>
                <button><>HIRE ME</> <img src="/assets/images/Vector.png" /></button>
            </div>
        </div>
    );
}

export default HeroSection;