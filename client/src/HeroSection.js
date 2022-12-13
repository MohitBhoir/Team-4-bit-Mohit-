import React from "react";

const HeroSection=()=>
{
    return(
        <section className="Hero-Section">
            <div className="hero-sec-container">
                <div className="left-sec">
                    <div className="Quote">
                    Your Health Comes First.
                    </div>
                    <span><img src="./img/WavePatternImg.png" className="wave-img" /></span>
                    <article className="Hero-section-text">
                    With Medicare services you will receive the best medical treatment in your home. Our team of skilled medical professionals and aids ensure that you get the care you need and deserve.
                    </article>
                </div>
                <div className="DocImgSEC">
                    <img src="./img/DocImg3.webp" className="DocImg" alt="" />
                </div>
                <div>
                    <span><img src="./img/WavePatternImg.png" className="wave-img" /></span>
                </div>
                
            </div>
            
        </section>
    )
}
export default HeroSection