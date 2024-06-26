import './App.css';
import Home from './routes/Home/home.component';
import {Routes, Route} from 'react-router-dom'
import CountryDetails from './components/countryDetails/countryDetails.component'
import Header from './routes/Header/header.component';
function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Header />}>
        <Route index  element = {<Home /> } />
        <Route path = ':countryName' element = {<CountryDetails />} />
      </Route>
    </Routes>
    
  );
}

export default App;
