import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Body from './components/body/body'
import LogIn from './components/LogIn/LogIn'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/home' element= {<>
            <Header />
            <Footer />
            <Body />
            </>
          } />
          <Route path = '/shop' element= {<>
            <Header />
            <Footer />
            </>
          } />
          <Route path = '/+INFO' element= {<>
            <Header />
            <Footer />
            </>
          } />
          <Route path = '/Login' element= {<>
            <Header />
            <Footer />
            <LogIn />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
