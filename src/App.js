import Card from './card'
import Footer from './Footer'
import Navbar from './navbar'
import Review from './review'

const App = () => {
  return <>
    <Navbar />
    <main>

    </main>
    <Card />
    <section className='section-img'>
    </section>
    <div className="center">
      <h1>Reviews</h1>
    </div>
    <Review />
    <Footer/>
  </>
}

export default App