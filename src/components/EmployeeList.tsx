import React from 'react';
import { Link } from 'react-router-dom';
import { employees } from '../data';
import { QRCodeSVG } from 'qrcode.react';

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
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src="/favicon.png"
                    alt={employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
                  {employee.name}
                </h2>
                <p className="text-gray-600 text-center mb-4">{employee.email}</p>
                
                <div className="flex justify-center mb-6">
                  <QRCodeSVG
                    value={`${baseUrl}/employee/${employee.id}`}
                    size={128}
                    level="H"
                    includeMargin={true}
                  />
                </div>
                
                <Link
                  to={`/employee/${employee.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}