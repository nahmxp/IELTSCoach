import type { CourseData } from '@/types/course'

interface CourseTitleProps {
  courseData: CourseData
}

export default function CourseTitle({ courseData }: CourseTitleProps) {
  const getChecklistValue = (text: string) => {
    const item = courseData.checklist.find(item => item.text.includes(text))
    return item?.text || ''
  }

  const totalEnrolled = getChecklistValue('Total Enrolled')
  const totalVideos = getChecklistValue('Videos')
  const timeRequired = getChecklistValue('Time Required')

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        {courseData.title}
      </h1>
      <div className="flex items-center space-x-4 mt-4">
        {totalEnrolled && (
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 tenms-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            <span className="text-gray-600 font-medium">{totalEnrolled}</span>
          </div>
        )}
        {totalVideos && (
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 tenms-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium">{totalVideos}</span>
          </div>
        )}
        {timeRequired && (
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 tenms-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600 font-medium">{timeRequired}</span>
          </div>
        )}
      </div>
    </section>
  )
}
