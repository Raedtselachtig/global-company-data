import React from 'react';
import { CheckCircle, Zap, Lock, RefreshCw, Filter, Code } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Data Access",
      description: "Get instant access to company information with our high-performance API and data delivery systems."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      description: "Enterprise-grade security measures ensure your data access is protected and compliant with regulations."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Regular Updates",
      description: "Our data is continuously updated from opencorporates.com to ensure accuracy and reliability."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Filtering",
      description: "Powerful search and filtering capabilities to find exactly the business data you need."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Well-documented API with SDKs for major programming languages and frameworks."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Data Quality",
      description: "Rigorous validation and verification processes ensure high-quality business information."
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-600">
            Powerful capabilities designed for businesses that need reliable company data
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
