import './App.css';
import './styles/footer.css'
import './styles/header.css'
import './styles/Card.css'

import Header from './components/sections/Header.js'
import Footer from './components/sections/Footer.js'
import Card from './components/Card.js'
function App() {
  const cardLoop = [];
  for(var i=0;i<10;i++){
    cardLoop.push(<Card/>);
  }

  return (
    <div className="App">
        <Header/>
        <img src="sample.jpg" className="samplelogo" alt="sample image" />
        {cardLoop}
       <Card />
      <Footer />
      
    </div>
  );
}

export default App;
