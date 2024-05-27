import './styles/App.css';
import Shop from './components/pages/Shop.js';
import Account from './components/pages/Account.js';
import Contact from './components/pages/Contact.js';
import Homepage from './components/pages/HomePage.js';
import Story from './components/pages/Story.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/story" element={<Story />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          {/* You can add other routes like /favorites and /cart if you have those components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
