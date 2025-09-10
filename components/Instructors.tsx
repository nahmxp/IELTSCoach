import type { CourseData, Instructor } from '@/types/course'
import Image from 'next/image'

interface InstructorsProps {
  courseData: CourseData
}

export default function Instructors({ courseData }: InstructorsProps) {
  const instructorSection = courseData.sections.find(section => section.type === 'instructors')
  
  if (!instructorSection || !instructorSection.values.length) {
    return null
  }

  const instructors = instructorSection.values as Instructor[]

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{instructorSection.name}</h2>
      <div className="space-y-6">
        {instructors.map((instructor, index) => (
          <div key={index} className="flex items-start space-x-6">
            <Image
              src={instructor.image}
              alt={`${instructor.name} - IELTS Instructor`}
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
              <p className="tenms-primary font-medium mb-2">{instructor.short_description}</p>
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
