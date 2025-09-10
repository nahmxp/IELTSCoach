'use client'

import { useLanguage } from './LanguageProvider'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const { currentLanguage, setLanguage } = useLanguage()
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang)
    setShowDropdown(false)
    router.push(`/?lang=${lang}`)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img src="/image.png" alt="Logo" className="h-10 w-10 rounded-full mr-2" />
          <div className="text-2xl font-bold tenms-primary">10 Minute School</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Skills</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Admission</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Books</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span className="font-medium text-gray-700">
                {currentLanguage === 'en' ? 'EN' : 'বাং'}
              </span>
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <button 
                  onClick={() => handleLanguageChange('en')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg"
                >
                  English
                </button>
                <button 
                  onClick={() => handleLanguageChange('bn')}
                  className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg"
                >
                  বাংলা
                </button>
              </div>
            )}
          </div>
          
          <button className="bg-tenms-success text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
