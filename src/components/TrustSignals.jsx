import React from 'react'
import { Diamond, Shield, Truck } from 'lucide-react'

function TrustSignals() {
  const signals = [
    {
      icon: Diamond,
      title: 'Certified Diamonds',
      description: 'IGI certified diamonds with authenticity guarantee'
    },
    {
      icon: Shield,
      title: 'Secure Checkout',
      description: '100% secure payment with encrypted transactions'
    },
    {
      icon: Truck,
      title: 'Free Insured Shipping',
      description: 'Complimentary insured delivery worldwide'
    }
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-soft-white/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center">
                <signal.icon className="w-6 h-6 text-champagne" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                  {signal.title}
                </h3>
                <p className="text-charcoal/60 text-sm font-sans">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
