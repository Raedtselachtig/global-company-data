import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Access to Global B2B Data
            </h1>
            <p className="text-xl text-gray-600">
              Gain valuable insights with our comprehensive database of business information. 
              Instant access to millions of verified business records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">10M+</div>
                <div className="text-gray-600">Business Profiles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
            <img
              src="/api/placeholder/600/400"
              alt="Data Visualization"
              className="relative w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
