import './styles/App.css';
import './styles/footer.css'
import './styles/header.css'
import './styles/Card.css'

import Header from './components/sections/Header.js'
import Footer from './components/sections/Footer.js'
import ProductList from './components/ProductList.js'

function App() {
  return (
    <div className="App">
        <Header/>
        <img src="sample.jpeg" className="samplelogo" alt="sample image" />
        <ProductList/>
        <ProductList/>
      <Footer />
      
    </div>
  );
}

export default App;
