import Header from '../sections/Header.js'
import Footer from '../sections/Footer.js'
import ProductList from '../ProductList.js'

const HomePage = () => {

    return (
        <>
            <Header />
            <div className='titleSection'>
                <h1>Cards</h1>
            </div>
            <img src="sample.jpeg" className="samplelogo" alt="sample image" />
            <ProductList />
            <div className='titleSection'>
                <h1>Products</h1>
            </div>
            <ProductList />

            <Footer />
        </>
    )
}

export default HomePage;