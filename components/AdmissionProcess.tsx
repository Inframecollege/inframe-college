"use client"

import { useState } from "react";
import AdmissionSidebar from "./Navbar/AdmissionSidebar";

const AdmissionProcess = () => {
  const [activePage, setActivePage] = useState('personal');

  const handleNextPage = (currentPage: string) => {
    const pages = ['personal', 'family', 'address', 'educational', 'program', 'payment', 'complete'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex < pages.length - 1) {
      setActivePage(pages[currentIndex + 1]);
    }
  };

  const handlePreviousPage = (currentPage: string) => {
    const pages = ['personal', 'family', 'address', 'educational', 'program', 'payment', 'complete'];
    const currentIndex = pages.indexOf(currentPage);
    if (currentIndex > 0) {
      setActivePage(pages[currentIndex - 1]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 pt-24">
      <AdmissionSidebar activePage={activePage} setActivePage={setActivePage} />
      
      <div className="flex-1 p-8 bg-gray-50 overflow-y-auto">
        {activePage === 'personal' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter first name" required/>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter last name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth *</label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email ID *</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter email address" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mobile Number *</label>
                <input type="tel" className="w-full p-2 border rounded" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Aadhar Number *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter 12-digit Aadhar number" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-1">Gender *</label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('personal')}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === 'family' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Family Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Father&apos;s Name *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter father&apos;s name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Father&apos;s Occupation *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter father&apos;s occupation" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mother&apos;s Name *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter mother&apos;s name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mother&apos;s Occupation *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter mother&apos;s occupation" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Annual Family Income *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter annual family income" />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage('family')}
              >
                Previous
              </button>
              <button 
                className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('family')}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === 'address' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Address Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Address Line 1 *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="House/Flat No., Building Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address Line 2</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Street, Locality" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter city name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter state" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Pincode *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter pincode" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Country *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter country" defaultValue="India" />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage('address')}
              >
                Previous
              </button>
              <button 
                className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('address')}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === 'educational' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Educational Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Last Qualification *</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Select qualification</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="diploma">Diploma</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Board/University *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter board/university name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Year of Passing *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="YYYY" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Percentage/CGPA *</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter percentage or CGPA" />
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage('educational')}
              >
                Previous
              </button>
              <button 
                className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('educational')}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === 'program' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Program Selection</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Course Category *</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Select category</option>
                  <option value="design">Design</option>
                  <option value="art">Art</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Course Type *</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Select type</option>
                  <option value="degree">Degree</option>
                  <option value="diploma">Diploma</option>
                  <option value="certificate">Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Course *</label>
                <select className="w-full p-2 border rounded">
                  <option value="">Select course</option>
                  <option value="interior">Interior Design</option>
                  <option value="fashion">Fashion Design</option>
                  <option value="graphic">Graphic Design</option>
                  <option value="animation">Animation</option>
                </select>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage('program')}
              >
                Previous
              </button>
              <button 
                className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('program')}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === 'payment' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Application Fee</h3>
                <p className="text-3xl font-bold text-blue-600">₹1,000</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Card Number *</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="XXXX XXXX XXXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Card Holder Name *</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter name on card" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV *</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="XXX" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage('payment')}
              >
                Previous
              </button>
              <button 
                className="bg-green-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage('payment')}
              >
                Make Payment
              </button>
            </div>
          </div>
        )}

        {activePage === 'complete' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
            <p className="text-gray-600 mb-8">Thank you for applying to Inframe School. We will review your application and get back to you soon.</p>
            <div className="bg-gray-50 border rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm text-gray-600 mb-2">Application Reference Number</p>
              <p className="text-2xl font-bold text-blue-600">INFRAME-2024-001</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionProcess;
  
