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
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="max-w-lg mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="relative h-48 bg-black flex items-center justify-center p-8">
            <img src="/cmacbanner.png" alt="CMAC Roofing" className="h-full object-contain" />
            <div className="absolute -bottom-20 w-full flex justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white">
                <img
                  src="/favicon.png"
                  alt={employee.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-24 pb-8 px-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{employee.name}</h1>
              <p className="text-gray-600">CMAC Roofing</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${employee.phone}`}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">{employee.phone}</span>
              </a>
              
              <a
                href={`mailto:${employee.email}`}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">{employee.email}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h2>
              
              <a
                href={socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Globe className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Website</span>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Facebook className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Facebook</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Instagram className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">Instagram</span>
              </a>

              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
              >
                <Youtube className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-gray-700">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}