import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, Mail, Globe, Facebook, Instagram, Youtube, UserPlus, ArrowLeft } from 'lucide-react';
import { employees, socialLinks } from '../data';
import { downloadVCard } from '../utils/vcard';
import { QRCodeSVG } from 'qrcode.react';

export default function EmployeeProfile() {
  const { id } = useParams<{ id: string }>();
  const employee = employees.find(emp => emp.id === id);
  const baseUrl = window.location.origin;

  if (!employee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Employee Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 justify-center">
            <ArrowLeft size={20} />
            Return to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} />
          Back to Directory
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-32 bg-black flex items-center justify-center p-4">
            <img src={employee.imageUrl} alt={employee.name} className="h-full object-contain" />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {employee.name}
            </h2>
            {employee.position && employee.position !== 'emply' && (
              <p className="text-gray-600 mb-4">{employee.position}</p>
            )}
            <div className="space-y-3 mb-8">
              <a href={`tel:${employee.phone}`} className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                <Phone size={20} />
                {employee.phone}
              </a>
              <a href={`mailto:${employee.email}`} className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                <Mail size={20} />
                {employee.email}
              </a>
            </div>
            <div className="flex flex-col items-center gap-6">
              <QRCodeSVG
                value={`${baseUrl}/employee/${employee.id}`}
                size={150}
                level="L"
                includeMargin={true}
              />
              <button
                onClick={() => downloadVCard(employee)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                title="Add to Contacts"
              >
                <UserPlus size={20} />
                <span>Save Contact</span>
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with CMAC Roofing</h3>
              <div className="flex justify-center space-x-6">
                <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Globe size={24} />
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Facebook size={24} />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Instagram size={24} />
                </a>
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}