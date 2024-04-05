import './App.css';
import './styles/footer.css'
import './styles/header.css'

import Header from './components/sections/Header.js'
import Footer from './components/sections/Footer.js'
function App() {
  return (
    <div className="App">
        <Header/>
        <img src="sample.jpg" className="samplelogo" alt="sample image" />
      <Footer />
    </div>
  );
}

export default App;
