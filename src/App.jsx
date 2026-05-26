import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ScrollHero from './components/ScrollHero'
import DetailsSection from './components/DetailsSection'
import StorySection from './components/StorySection'
import CraftsmanshipSection from './components/CraftsmanshipSection'
import FeaturesSection from './components/FeaturesSection'
import StickyCTA from './components/StickyCTA'
import JewelryGrid from './components/JewelryGrid'
import Footer from './components/Footer'
import CategoryPage from './components/CategoryPage'
import ProductPage from './components/ProductPage'

function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <ScrollHero />
        <Navigation />
        <JewelryGrid />
        <DetailsSection />
        <StorySection />
        <CraftsmanshipSection />
        <FeaturesSection />
        <Footer />
      </main>
      <StickyCTA />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/:category/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
