import { useState } from "react";
import ReviewData from "./reviewData";
import {FaAngleLeft,FaAngleRight} from "react-icons/fa"

const Review = () => {
    const [slideindex, setSlideindex] = useState(0)
    if (slideindex < 0) {
        setSlideindex(ReviewData.length-1)
    }
    if (slideindex > ReviewData.length - 1) {
        setSlideindex(0)
    }
    return <div className="carousel">
        {
            ReviewData.map((d,index) => {
                const { id, image, name, review} = d
                let position = "nextslide"
                if (index === slideindex) {
                    position="active"
                }
                if ((slideindex === index - 1) || (slideindex === ReviewData.length - 1 && index === 0)) {
                    position="lastslide"
                }
                return <article key={id} className={position} id="review-card">
                        <img className="card-img" src={image} alt={name} />
                        <h3 className="card-heading">{name}</h3>
                        <p className="card-para">{review}</p>
                </article>
            })
        }
        <div className="btn-container">
            <button className="prev" onClick={()=>setSlideindex(slideindex+1)}><FaAngleLeft/></button>
            <button className="next" onClick={() => setSlideindex(slideindex - 1)}><FaAngleRight/></button>
        </div>
        </div>
}

export default Review;