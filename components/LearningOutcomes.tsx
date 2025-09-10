import type { CourseData, Pointer } from '@/types/course'

interface LearningOutcomesProps {
  courseData: CourseData
}

export default function LearningOutcomes({ courseData }: LearningOutcomesProps) {
  const pointersSection = courseData.sections.find(section => section.type === 'pointers')
  
  if (!pointersSection || !pointersSection.values.length) {
    return null
  }

  const pointers = pointersSection.values as Pointer[]

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{pointersSection.name}</h2>
      <div className="space-y-4">
        {pointers.map((pointer) => (
          <div key={pointer.id} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-tenms-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 leading-relaxed">{pointer.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
