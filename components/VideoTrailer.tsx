'use client'

import type { CourseData } from '@/types/course'

interface VideoTrailerProps {
  courseData: CourseData
}

export default function VideoTrailer({ courseData }: VideoTrailerProps) {
  const previewVideo = courseData.media.find(
    media => media.name === 'preview_gallery' && media.resource_type === 'video'
  )

  const handleEnrollment = () => {
    // Implement enrollment logic here
    console.log('Enrollment process triggered')
    alert('Enrollment feature will be implemented here!')
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-8">
      {previewVideo && (
        <div className="relative mb-6">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${previewVideo.resource_value}`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Course Preview"
            />
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <div className="text-3xl font-bold text-gray-900 mb-2">৳1,000</div>
        <p className="text-gray-600">One-time payment • Lifetime access</p>
      </div>

      <button 
        onClick={handleEnrollment}
        className="w-full bg-tenms-success text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
        {courseData.cta_text.name}
      </button>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 tenms-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 tenms-warning" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Certificate</span>
          </div>
        </div>
      </div>
    </div>
  )
}
