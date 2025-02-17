import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, Globe, Facebook, Instagram, Youtube } from 'lucide-react';
import { employees, socialLinks } from '../data';

export default function EmployeeProfile() {
  const { id } = useParams<{ id: string }>();
  const employee = employees.find(emp => emp.id === id);

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Employee Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <img src="/cmacbanner.png" alt="CMAC Roofing" className="h-20 object-contain" />
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-24 bg-black flex items-center justify-center p-4">
            <img src={employee.imageUrl} alt={employee.name} className="h-full object-contain" />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
              {employee.name}
            </h2>
            <p className="text-gray-600 text-center mb-4">{employee.email}</p>
            <div className="flex justify-center mb-6">
              <a href={`tel:${employee.phone}`} className="text-blue-600 hover:text-blue-800">
                <Phone className="inline-block mr-2" />
                {employee.phone}
              </a>
            </div>
            <div className="flex justify-center space-x-4">
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Globe className="inline-block" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Facebook className="inline-block" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Instagram className="inline-block" />
              </a>
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Youtube className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}