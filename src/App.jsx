import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter />
        <Routes />
          <Route path = '/home' elements= {<>
            <Header />
            <Footer />
            </>
          } />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
