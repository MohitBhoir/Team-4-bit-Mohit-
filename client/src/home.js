import Footer from './Footer'
import Card from './card'
import Review from './review'
import HeroSection from './HeroSection'
import MedicineUses from './MedicineUses'

const Home = () => {
    return <>
        <HeroSection/>
        <Card />
        {/* <section className='section-img'>
    </section> */}
        <MedicineUses/>
        <div className="center">
            <h1>Reviews</h1>
        </div>
        <Review />
        <Footer />
    </>
}

export default Home;