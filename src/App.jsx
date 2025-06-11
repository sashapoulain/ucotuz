// import { useState } from 'react'
import './App.css'
import { Button } from 'reactstrap';
import './assets/css/style.css';
import Header from './components/Header/Header.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandCarousel from './components/BrandCarousel';
import CampaignSlider from './components/CampaignSlider';
import ProductCard from './components/ProductCard';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Footer from './components/Footer';
import FaqPage from './pages/FaqPage';
import HelpPage from './pages/HelpPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import Category from './pages/Category';
import Contact from './pages/Contact';
import About from './pages/About';
import Whoweare from './pages/Whoweare';
import TeamMembers from './pages/TeamMembers'
import PrivacyPolicy from './pages/PrivacyPolicy';
import Career from './pages/Career';
import Blog from './pages/Blog';
import BlogDetail from './components/BlogDetail';
import BlogList from './components/BlogList'
import LoginRegister from './pages/LoginRegister';
import Store from './pages/Store'
import CookieConsent from './components/CookieConsent';
import Pricing from './pages/Pricing';


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
        <Route path="/sss" element={<FaqPage />} />
        <Route path="/yardim" element={<HelpPage />} />
        <Route path="/iade-politikasi" element={<ReturnPolicyPage />} />
        <Route path="/ilanlar" element={<Category />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/bizkimiz" element={<Whoweare />} />
        <Route path="/ekibimiz" element={<TeamMembers />} />
        <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
        <Route path="/kariyer" element={<Career />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> */}
        <Route path="/blog" element={<Blog />}>
          <Route index element={<BlogList showFeatured={true} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
        <Route path="/giris" element={<LoginRegister />} />
        <Route path="/magaza" element={<Store />} />
        <Route path="/pricing" element={<Pricing />} />



      </Routes>
      <CookieConsent />
      <Footer />
    </Router>
  )
}

export default App
