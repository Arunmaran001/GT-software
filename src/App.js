import React from 'react';
import { BrowserRouter, Route, Routes, useLocation ,} from 'react-router-dom';

import Navebar from './NavSide/Navebar';
import Sidebar from './NavSide/Sidebar';
import Improvedskillsection from './Body2/Improvedskillsection';
import QouteSection from './Body2/QouteSection';
import ChiefSection from './Chefs/ChiefSection';
import HomeFooter from './Foote/HomeFooter';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import PreviousSearches from './AAAAAA/PreviousSearches';
import RecipeCard from './AAAAAA/RecipeCard';
import BookTable from './pages/BookTable';
import Homepage from './Components/Homepage';

import CartItem from './AAAAAA/CartItem';


function App() {
  return (
    <BrowserRouter>
      <Navebar />
      <Routes>
        
        <Route path='/Home' element={<Home />} />
       
        <Route path='/Recipes' element={<Recipes />} />
        <Route  path='/BookTable' element={<BookTable />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/Navebar' element={<Navebar />} />
        <Route path='/Sidebar' element={<Sidebar />} />
        <Route path='/Improvedskillsection' element={<Improvedskillsection />} />
        <Route path='/QouteSection' element={<QouteSection />} />
        <Route path='/ChiefSection' element={<ChiefSection />} />
        <Route path='/HomeFooter' element={<HomeFooter />} />
        <Route path='/previousSearches' element={<PreviousSearches />} />
        <Route path='/RecipeCard' element={<RecipeCard />} />
        <Route path='/CartItem' element={<CartItem />} />
       
      </Routes>
      <FooterHandler />
    </BrowserRouter>
  );
}

// Component to handle conditional rendering of HomeFooter
function FooterHandler() {
  const location = useLocation();

  // Conditionally render HomeFooter based on the current path
  if (location.pathname !== '/BookTable' )  {
    return <HomeFooter />;
  }
  return null; // Do not render anything for /BookTable path
  
}





export default App;


