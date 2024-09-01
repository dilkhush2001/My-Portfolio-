import "../css/footer.css";
const Footer = () => {
    return (
        <div className="footer_main">
            <div className="footer_logo">
                <img src="/assets/images/footer_logo1.png" />
                <img src="/assets/images/footer_logo2.png" />
                <img src="/assets/images/footer_logo3.png" />
                <img src="/assets/images/footer_logo4.png" />
            </div>
            <div className="footer_description">
                <img src="/assets/images/navicon.png" className="footer_description_img"/>
                <div className="footer_info">
                    <div className="companies">
                        <div className="company">
                            <img src="/assets/images/company1.png" />
                            <div>4.5/5 rating </div>
                        </div>
                        <div className="company">
                            <img src="/assets/images/company2.png"  />
                            <div>4.5/5 rating </div>
                        </div>
                        <div className="company">
                            <img src="/assets/images/company3.png" />
                            <div>4.5/5 rating </div>
                        </div>
                    </div>
                        <div className="quick">
                            <div className="quick_head">Quick Links</div>
                            <div><a href='http://localhost:4000/home' style={{textDecoration:"none", color:"black"}}>Home</a></div>
                            <div><a href='http://localhost:4000/skills'style={{textDecoration:"none", color:"black"}}>Skills</a></div>
                            <div>Education</div>
                            <div><a>Projects</a></div>
                            <div>Recommendations</div>
                        </div>
                        <div className="quick">
                            <div className="quick_head">Portfolio</div>
                            <div>Front End Development</div>
                            <div>Backend Development</div>
                            <div>Website Design</div>
                            <div>Problem solvin && DSA</div>
                            <div>Machine learning</div>
                        </div>
                        <div className="quick">
                            <div className="quick_head">Connects</div>
                            <img src="/assets/images/linkdin.png" className="quick_head_img1"/>
                            <img src="/assets/images/instagram.png" className="quick_head_img2"/>
                            <img src="/assets/images/facebook.png" className="quick_head_img3"/>

                        </div>
                    </div>

            </div>
            <div className="copywrites"><div className="copymatter"><span style={{fontSize:'21px'}}>&copy;</span> 2024 Copyright, All right reserved</div> </div>
        </div>
    )
}
export default Footer;