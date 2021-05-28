import './styles/App.css';

import Search from './pages/Search'
import Home from './pages/Home.js'
import Create from './pages/Create.js';
import Categories from './pages/Categories.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/categories" component={Categories} />
        <Footer />
        
    </div>
    </Router>
  );
}

export default App;
