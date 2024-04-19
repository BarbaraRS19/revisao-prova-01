import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import List from './components/ListItems';

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Galeria/>
      <Footer/>
      
    </div>
  );
}

export default App;
