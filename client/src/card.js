import CardData from "./cardData";

const Card = () => {
    return <div className="card-container">
        {
            CardData.map((d) => {
                const { id, image, heading, para } = d
                return <article key={id} className="card">
                    <img className="card-img" src={image} alt={heading} />
                    <h3 className="card-heading">{heading}</h3>
                    <p className="card-para">{para}</p>
                </article>
            })
        }
    </div>
}

export default Card;