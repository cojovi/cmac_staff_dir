import React from 'react';
import { Link } from 'react-router-dom';
import { employees } from '../data';
import { QRCodeSVG } from 'qrcode.react';
import { UserPlus } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export default function EmployeeList() {
  const baseUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-12">
          <img src="/cmacbanner.png" alt="CMAC Roofing" className="h-20 object-contain" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {employees.map((employee) => (
            <div key={employee.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-24 bg-black flex items-center justify-center p-4">
                <img src={employee.imageUrl} alt={employee.name} className="h-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{employee.name}</h3>
                {employee.position && (
                  <p className="text-sm text-gray-600 mt-1">{employee.position}</p>
                )}
                <div className="mt-4 space-y-2">
                  <a href={`tel:${employee.phone}`} className="text-blue-600 hover:text-blue-800 block">
                    {employee.phone}
                  </a>
                  <a href={`mailto:${employee.email}`} className="text-blue-600 hover:text-blue-800 block">
                    {employee.email}
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <QRCodeSVG
                    value={`${baseUrl}/employee/${employee.id}`}
                    size={100}
                    level="L"
                    includeMargin={true}
                  />
                  <button
                    onClick={() => downloadVCard(employee)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    title="Add to Contacts"
                  >
                    <UserPlus size={20} />
                    <span>Save Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}