import { useState } from 'react'
import './App.css'
import { Button } from 'reactstrap';
import './assets/css/style.css';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCarousel from './components/BrandCarousel';
import CampaignSlider from './components/CampaignSlider';
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"; // Eğer sayfayı oluşturmadıysan birazdan göstereceğim
import Footer from './components/Footer';




function App() {

  return (
 
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BrandCarousel />
              <CampaignSlider />
              <ProductCard />
            </>
          }
        />
        <Route path="/product/:title" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
