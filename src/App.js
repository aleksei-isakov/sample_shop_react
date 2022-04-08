import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home'
import Collection from "./pages/collection";
import NotFound from "./pages/notFound";
import './styles/App.css'
import Details from "./pages/details";
import CollectionProvider from "./context/collection-provider";


function App() {

  return (
      <CollectionProvider>
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='collection' element={<Collection/>} />
                  <Route path='home' element={<Home/>} />
                  <Route path='/card/:id' element={<Details/>} />
                  <Route path='*' element={<NotFound/>} />
              </Routes>
          </Router>
      </CollectionProvider>
  );
}

export default App;
