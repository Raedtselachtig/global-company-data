import React from 'react';
import { Database, Globe, Search, Api, Shield, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Company Database Access",
      description: "Access millions of verified company records with detailed business information, updated in real-time from opencorporates.com.",
      features: ["Company Details", "Financial Data", "Corporate Structure", "Real-time Updates"]
    },
    {
      icon: <Api className="w-8 h-8 text-blue-600" />,
      title: "API Integration",
      description: "Seamlessly integrate our data into your systems with our robust API, enabling real-time data access and custom queries.",
      features: ["Real-time Access", "Custom Queries", "Bulk Data Retrieval", "Flexible Integration"]
    },
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Data Enrichment",
      description: "Enhance your existing database with our comprehensive business information and keep your records up-to-date.",
      features: ["Data Verification", "Record Enhancement", "Regular Updates", "Custom Fields"]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive B2B Data Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Access accurate, up-to-date business information through our various service offerings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
