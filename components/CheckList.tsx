import type { CourseData } from '@/types/course'
import Image from 'next/image'

interface CheckListProps {
  courseData: CourseData
}

export default function CheckList({ courseData }: CheckListProps) {
  // Filter checklist items that should be visible
  const visibleItems = courseData.checklist.filter(item => 
    item.list_page_visibility || 
    item.text.includes('Videos') || 
    item.text.includes('Mock') || 
    item.text.includes('Lecture') || 
    item.text.includes('Book') || 
    item.text.includes('Facebook') || 
    item.text.includes('Lifetime')
  )

  if (!visibleItems.length) {
    return null
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">What's included</h3>
      <div className="space-y-3">
        {visibleItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-3">
            <Image
              src={item.icon}
              alt={`${item.text} icon`}
              width={20}
              height={20}
              className="w-5 h-5 mt-0.5"
            />
            <span className="text-gray-700 text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
