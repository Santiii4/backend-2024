import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Body from './components/body/body'
import LogIn from './components/LogIn/LogIn'
import Shop from './components/shop/shop'
import Register from './components/Register/Register'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import DataProvider from './components/Context/DataContext';


function App() {
  return (
    <DataProvider>
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
                <Shop />
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
              <Route path = '/Register' element= {<>
                <Header />
                <Footer />
                <Register />
                </>
              } />
            </Routes>
          </Router>
      </div>
  </DataProvider>
  );
}

export default App;
