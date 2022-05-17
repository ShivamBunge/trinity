import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <>
            <div className="main_quote">
                <p className="homepg_quotebox">&quot;10+ hours of World className learning
                    experience&quot;<br />&quot;Net 60 years worth of Mckinsey &amp; Co. &amp; Governance consulting
                    Experience&quot;<br />&quot;3 Global industry Icons&quot;</p>
                <h3 className="Trinity_title">- The Trinity</h3>
            </div>
            <div className="Brands">
                <img src="https://thetrinitybyggi.org/img/brands/fs.jpg" className="Brand_img" />
                <img src="https://thetrinitybyggi.org/img/brands/oxford.png" className="Brand_img" />
                <img src="https://thetrinitybyggi.org/img/brands/harvard.png" className="Brand_img" />
                <img src="https://thetrinitybyggi.org/img/brands/rt.jpeg" className="Brand_img" />
            </div>
            <div className="home_btn">
                <a className="btn_footer">Try Free Lessons</a>
                <span style={{marginRight: 2+"rem"}}/>
                <a className="btn_footer" href="/allVideos">Explore the Trinity</a>
            </div>
        </>
    )
}

export default Footer