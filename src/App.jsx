import React from 'react'
import Navigation from './components/Navigation'
import ScrollHero from './components/ScrollHero'
import DetailsSection from './components/DetailsSection'
import StorySection from './components/StorySection'
import CraftsmanshipSection from './components/CraftsmanshipSection'
import FeaturesSection from './components/FeaturesSection'
import StickyCTA from './components/StickyCTA'
import JewelryGrid from './components/JewelryGrid'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ScrollHero />
        <JewelryGrid />
        <DetailsSection />
        <StorySection />
        <CraftsmanshipSection />
        <FeaturesSection />
      </main>
      <StickyCTA />
    </div>
  )
}

export default App
